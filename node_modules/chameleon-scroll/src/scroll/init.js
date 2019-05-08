import {
  hasPerspective,
  hasTransition,
  hasTransform,
  hasTouch,
  style,
  offset,
  addEvent,
  removeEvent,
  getRect,
  preventDefaultException
} from '../util/dom'
import { extend, isUndef } from '../util/lang'

const DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.0015,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  stopPropagation: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
}

export function initMixin(CScroll) {
  CScroll.prototype._init = function (el, options) {
    this._handleOptions(options)

    // init private custom events
    this._events = {}

    this.x = 0
    this.y = 0
    this.directionX = 0
    this.directionY = 0

    this._addDOMEvents()
    this._initExtFeatures()
    this._watchTransition()
    this._initDOMObserver()
    this._handleAutoBlur()
    this.refresh()

    this.scrollTo(this.options.startX, this.options.startY)
  }

  CScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options)

    this.translateZ = hasPerspective ? ' translateZ(0)' : ''

    this.options.useTransition = this.options.useTransition && hasTransition
    this.options.useTransform = this.options.useTransform && hasTransform

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY

    // With eventPassthrough we also need lockDirection mechanism
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold

    if (this.options.tap === true) {
      this.options.tap = 'tap'
    }
  }

  CScroll.prototype._addDOMEvents = function () {
    let eventOperation = addEvent
    this._handleDOMEvents(eventOperation)
  }

  CScroll.prototype._removeDOMEvents = function () {
    let eventOperation = removeEvent
    this._handleDOMEvents(eventOperation)
  }

  CScroll.prototype._handleDOMEvents = function (eventOperation) {
    let target = this.options.bindToWrapper ? this.wrapper : window
    eventOperation(window, 'orientationchange', this)
    eventOperation(window, 'resize', this)

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true)
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this)
      eventOperation(target, 'mousemove', this)
      eventOperation(target, 'mousecancel', this)
      eventOperation(target, 'mouseup', this)
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this)
      eventOperation(target, 'touchmove', this)
      eventOperation(target, 'touchcancel', this)
      eventOperation(target, 'touchend', this)
    }

    eventOperation(this.scroller, style.transitionEnd, this)
  }

  CScroll.prototype._initExtFeatures = function () {
    if (this.options.pullUpLoad) {
      this._initPullUp()
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown()
    }
  }

  CScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return
    }
    let me = this
    let isInTransition = false
    let key = this.useTransition ? 'isInTransition' : 'isAnimating'
    Object.defineProperty(this, key, {
      get() {
        return isInTransition
      },
      set(newVal) {
        isInTransition = newVal
        // fix issue #359
        let el = me.scroller.children.length ? me.scroller.children : [me.scroller]
        let pointerEvents = (isInTransition && !me.pulling) ? 'none' : 'auto'
        for (let i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents
        }
      }
    })
  }

  CScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', () => {
      let activeElement = document.activeElement
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur()
      }
    })
  }

  CScroll.prototype._initDOMObserver = function () {
    if (typeof MutationObserver !== 'undefined') {
      let timer
      let observer = new MutationObserver((mutations) => {
        // don't do any refresh during the transition, or outside of the boundaries
        if (this._shouldNotRefresh()) {
          return
        }
        let immediateRefresh = false
        let deferredRefresh = false
        for (let i = 0; i < mutations.length; i++) {
          const mutation = mutations[i]
          if (mutation.type !== 'attributes') {
            immediateRefresh = true
            break
          } else {
            if (mutation.target !== this.scroller) {
              deferredRefresh = true
              break
            }
          }
        }
        if (immediateRefresh) {
          this.refresh()
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer)
          timer = setTimeout(() => {
            if (!this._shouldNotRefresh()) {
              this.refresh()
            }
          }, 60)
        }
      })
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      }
      observer.observe(this.scroller, config)

      this.on('destroy', () => {
        observer.disconnect()
      })
    } else {
      this._checkDOMUpdate()
    }
  }

  CScroll.prototype._shouldNotRefresh = function () {
    let outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY
    return this.isInTransition || this.stopFromTransition || outsideBoundaries
  }

  CScroll.prototype._checkDOMUpdate = function () {
    let scrollerRect = getRect(this.scroller)
    let oldWidth = scrollerRect.width
    let oldHeight = scrollerRect.height

    function check() {
      if (this.destroyed) {
        return
      }
      scrollerRect = getRect(this.scroller)
      let newWidth = scrollerRect.width
      let newHeight = scrollerRect.height

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh()
      }
      oldWidth = newWidth
      oldHeight = newHeight

      next.call(this)
    }

    function next() {
      setTimeout(() => {
        check.call(this)
      }, 1000)
    }

    next.call(this)
  }

  CScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e)
        break
      case 'touchmove':
      case 'mousemove':
        this._move(e)
        break
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e)
        break
      case 'orientationchange':
      case 'resize':
        this._resize()
        break
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e)
        break
      case 'click':
        if (!e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault()
            e.stopPropagation()
          }
        }
        break
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e)
        break
    }
  }

  CScroll.prototype.refresh = function () {
    const isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static'
    let wrapperRect = getRect(this.wrapper)
    this.wrapperWidth = wrapperRect.width
    this.wrapperHeight = wrapperRect.height

    let scrollerRect = getRect(this.scroller)
    this.scrollerWidth = Math.round(scrollerRect.width)
    this.scrollerHeight = Math.round(scrollerRect.height)

    this.relativeX = scrollerRect.left
    this.relativeY = scrollerRect.top

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left
      this.relativeY -= wrapperRect.top
    }

    this.minScrollX = 0
    this.minScrollY = 0

    this.maxScrollX = this.wrapperWidth - this.scrollerWidth
    this.maxScrollY = this.wrapperHeight - this.scrollerHeight

    if (this.maxScrollX < 0) {
      this.maxScrollX -= this.relativeX
      this.minScrollX = -this.relativeX
    }
    if (this.maxScrollY < 0) {
      this.maxScrollY -= this.relativeY
      this.minScrollY = -this.relativeY
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = this.minScrollX
      this.scrollerWidth = this.wrapperWidth
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = this.minScrollY
      this.scrollerHeight = this.wrapperHeight
    }

    this.endTime = 0
    this.directionX = 0
    this.directionY = 0
    this.wrapperOffset = offset(this.wrapper)

    this.trigger('refresh')

    this.resetPosition()
  }

}
