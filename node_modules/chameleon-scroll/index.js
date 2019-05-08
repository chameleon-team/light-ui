import { eventMixin } from './src/scroll/event'
import { initMixin } from './src/scroll/init'
import { coreMixin } from './src/scroll/core'
import { pullDownMixin } from './src/scroll/pulldown'
import { pullUpMixin } from './src/scroll/pullup'

function CScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.')
  }
  this.scroller = this.wrapper.children[0]
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.')
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style

  this._init(el, options)
}

initMixin(CScroll)
coreMixin(CScroll)
eventMixin(CScroll)
pullDownMixin(CScroll)
pullUpMixin(CScroll)


export default CScroll