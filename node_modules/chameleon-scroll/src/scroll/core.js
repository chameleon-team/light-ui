import {
  eventType,
  TOUCH_EVENT,
  preventDefaultException,
  tap,
  click,
  dblclick,
  style,
  offset,
  offsetToBody
} from '../util/dom'
import { ease } from '../util/ease'
import { momentum } from '../util/momentum'
import { requestAnimationFrame, cancelAnimationFrame } from '../util/raf'
import { getNow, isUndef } from '../util/lang'
import {
  DIRECTION_DOWN,
  DIRECTION_UP,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  PROBE_DEBOUNCE,
  PROBE_REALTIME
} from '../util/const'
import { isAndroid } from '../util/env'
import { assert } from '../util/debug'

export function coreMixin(CScroll) {
  CScroll.prototype._start = function (e) {
    let _eventType = eventType[e.type]
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return
      }
    }
    if (this.destroyed || (this.initiated && this.initiated !== _eventType)) {
      return
    }
    this.initiated = _eventType

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    this.moved = false
    this.distX = 0
    this.distY = 0
    this.directionX = 0
    this.directionY = 0
    this.movingDirectionX = 0
    this.movingDirectionY = 0
    this.directionLocked = 0

    this._transitionTime()
    this.startTime = getNow()

    this.stop()

    let point = e.touches ? e.touches[0] : e

    this.startX = this.x
    this.startY = this.y
    this.absStartX = this.x
    this.absStartY = this.y
    this.pointX = point.pageX
    this.pointY = point.pageY

    this.trigger('beforeScrollStart')
  }

  CScroll.prototype._move = function (e) {
    if (this.destroyed || eventType[e.type] !== this.initiated) {
      return
    }
    
    if (this.options.preventDefault) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    let point = e.touches ? e.touches[0] : e
    let deltaX = point.pageX - this.pointX
    let deltaY = point.pageY - this.pointY

    this.pointX = point.pageX
    this.pointY = point.pageY

    this.distX += deltaX
    this.distY += deltaY

    let absDistX = Math.abs(this.distX)
    let absDistY = Math.abs(this.distY)

    let timestamp = getNow()

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && (absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance)) {
      return
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h' // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v' // lock vertically
      } else {
        this.directionLocked = 'n' // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault()
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false
        return
      }
      deltaY = 0
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault()
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false
        return
      }
      deltaX = 0
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0
    deltaY = this.hasVerticalScroll ? deltaY : 0
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0

    let newX = this.x + deltaX
    let newY = this.y + deltaY

    let top = false
    let bottom = false
    let left = false
    let right = false
    // Slow down or stop if outside of the boundaries
    const bounce = this.options.bounce
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top
      bottom = bounce.bottom === undefined ? true : bounce.bottom
      left = bounce.left === undefined ? true : bounce.left
      right = bounce.right === undefined ? true : bounce.right
    }
    if (newX > this.minScrollX || newX < this.maxScrollX) {
      if ((newX > this.minScrollX && left) || (newX < this.maxScrollX && right)) {
        newX = this.x + deltaX / 3
      } else {
        newX = newX > this.minScrollX ? this.minScrollX : this.maxScrollX
      }
    }
    if (newY > this.minScrollY || newY < this.maxScrollY) {
      if ((newY > this.minScrollY && top) || (newY < this.maxScrollY && bottom)) {
        newY = this.y + deltaY / 3
      } else {
        newY = newY > this.minScrollY ? this.minScrollY : this.maxScrollY
      }
    }

    if (!this.moved) {
      this.moved = true
      this.trigger('scrollStart')
    }

    this._translate(newX, newY)

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp
      this.startX = this.x
      this.startY = this.y

      if (this.options.probeType === PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        })
      }
    }

    if (this.options.probeType > PROBE_DEBOUNCE) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      })
    }

    let scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

    let pX = this.pointX - scrollLeft
    let pY = this.pointY - scrollTop

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance
    ) {
      this._end(e)
    }
  }

  CScroll.prototype._end = function (e) {
    if (this.destroyed || eventType[e.type] !== this.initiated) {
      return
    }
    this.initiated = false

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    })

    this.isInTransition = false

    // ensures that the last position is rounded
    let newX = Math.round(this.x)
    let newY = Math.round(this.y)

    let deltaX = newX - this.absStartX
    let deltaY = newY - this.absStartY
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel')
      return
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return
    }

    this._translate(newX, newY)

    this.endTime = getNow()
    let duration = this.endTime - this.startTime
    let absDistX = Math.abs(newX - this.startX)
    let absDistY = Math.abs(newY - this.startY)

    let time = 0
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      let top = false
      let bottom = false
      let left = false
      let right = false
      const bounce = this.options.bounce
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top
        bottom = bounce.bottom === undefined ? true : bounce.bottom
        left = bounce.left === undefined ? true : bounce.left
        right = bounce.right === undefined ? true : bounce.right
      }
      const wrapperWidth = ((this.directionX === DIRECTION_RIGHT && left) || (this.directionX === DIRECTION_LEFT && right)) ? this.wrapperWidth : 0
      const wrapperHeight = ((this.directionY === DIRECTION_DOWN && top) || (this.directionY === DIRECTION_UP && bottom)) ? this.wrapperHeight : 0
      let momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options)
        : {destination: newX, duration: 0}
      let momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options)
        : {destination: newY, duration: 0}
      newX = momentumX.destination
      newY = momentumY.destination
      time = Math.max(momentumX.duration, momentumY.duration)
      this.isInTransition = true
    }

    let easing = ease.swipe

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = ease.swipeBounce
      }
      this.scrollTo(newX, newY, time, easing)
      return
    }

    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    })
  }

  CScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    let preventClick = this.stopFromTransition && !this.pulling
    this.stopFromTransition = false

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (!preventClick) {
        const _dblclick = this.options.dblclick
        let dblclickTrigged = false
        if (_dblclick && this.lastClickTime) {
          const {delay = 300} = _dblclick
          if (getNow() - this.lastClickTime < delay) {
            dblclickTrigged = true
            dblclick(e)
          }
        }
        if (this.options.tap) {
          tap(e, this.options.tap)
        }

        if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
          click(e)
        }
        this.lastClickTime = dblclickTrigged ? null : getNow()
        return true
      }
      return false
    }
    return false
  }

  CScroll.prototype._resize = function () {
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0
    }
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = setTimeout(() => {
      this.refresh()
    }, this.options.resizePolling)
  }

  CScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer)
    this.probeTimer = requestAnimationFrame(probe)

    let me = this

    function probe() {
      let pos = me.getComputedPosition()
      me.trigger('scroll', pos)
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos)
        return
      }
      me.probeTimer = requestAnimationFrame(probe)
    }
  }

  CScroll.prototype._transitionTime = function (time = 0) {
    this.scrollerStyle[style.transitionDuration] = time + 'ms'
  }

  CScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing
  }

  CScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return
    }

    this._transitionTime()
    const needReset = !this.pulling || this.movingDirectionY === DIRECTION_UP
    if (needReset && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false
      if (this.options.probeType !== PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        })
      }
    }
  }

  CScroll.prototype._translate = function (x, y) {
    assert(!isUndef(x) && !isUndef(y), 'Translate x or y is null or undefined.')
    
    this.scrollerStyle[style.transform] = `translate(${x}px,${y}px) scale(1)${this.translateZ}`

    this.x = x
    this.y = y
  }

  CScroll.prototype.scrollTo = function (x, y, time = 0, easing = ease.bounce) {
    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y)

    this._transitionTimingFunction(easing.style)
    this._transitionTime(time)
    this._translate(x, y)

    if (time && this.options.probeType === PROBE_REALTIME) {
      this._startProbe()
    }

    if (!time && (x !== this.x || y !== this.y)) {
      this.trigger('scroll', {
        x,
        y
      })
      // force reflow to put everything in position
      this._reflow = document.body.offsetHeight
      if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
        this.trigger('scrollEnd', {
          x,
          y
        })
      }
    }
  }

  CScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return
    }
    el = el.nodeType ? el : this.scroller.querySelector(el)

    let pos = offset(el)
    pos.left -= this.wrapperOffset.left
    pos.top -= this.wrapperOffset.top

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
    }

    pos.left -= offsetX || 0
    pos.top -= offsetY || 0
    pos.left = pos.left > this.minScrollX ? this.minScrollX : pos.left < this.maxScrollX ? this.maxScrollX : pos.left
    pos.top = pos.top > this.minScrollY ? this.minScrollY : pos.top < this.maxScrollY ? this.maxScrollY : pos.top

    this.scrollTo(pos.left, pos.top, time, easing)
  }

  CScroll.prototype.resetPosition = function (time = 0, easeing = ease.bounce) {
    let x = this.x
    let roundX = Math.round(x)
    if (!this.hasHorizontalScroll || roundX > this.minScrollX) {
      x = this.minScrollX
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX
    }

    let y = this.y
    let roundY = Math.round(y)
    if (!this.hasVerticalScroll || roundY > this.minScrollY) {
      y = this.minScrollY
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY
    }

    if (x === this.x && y === this.y) {
      return false
    }

    this.scrollTo(x, y, time, easeing)

    return true
  }

  CScroll.prototype.getComputedPosition = function () {
    let matrix = window.getComputedStyle(this.scroller, null)
    let x
    let y

    matrix = matrix[style.transform].split(')')[0].split(', ')
    x = +(matrix[12] || matrix[4])
    y = +(matrix[13] || matrix[5])
    
    return {
      x,
      y
    }
  }

  CScroll.prototype.stop = function () {
    if (this.isInTransition) {
      this.isInTransition = false
      cancelAnimationFrame(this.probeTimer)
      let pos = this.getComputedPosition()
      this._translate(pos.x, pos.y)
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      })
      this.stopFromTransition = true
    }
  }

  CScroll.prototype.destroy = function () {
    this.destroyed = true
    this.trigger('destroy')
    cancelAnimationFrame(this.probeTimer)
    this._removeDOMEvents()
    // remove custom events
    this._events = {}
  }
}
