var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([6],{

/***/ "../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/example/audio/audio.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Audio = function Audio() {
  _classCallCheck(this, Audio);

  this.data = {
    controls: true,
    poster: 'http://p1.music.126.net/bYTctrjUegSyzDPteIeNOw==/74766790705099.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0',
    name: '月半小夜曲',
    author: '李克勤',
    loop: false,
    src: __webpack_require__("./src/assets/mp3/ybxyq.mp3"),
    audio: null
  };
  this.methods = {
    onPlay: function onPlay() {
      console.log('播放开始了');
    },
    onPause: function onPause() {
      console.log('暂停了');
    },
    ended: function ended() {
      console.log('播放完毕');
    },
    updateTime: function updateTime(_ref) {
      var _ref$detail = _ref.detail,
          currentTime = _ref$detail.currentTime,
          duration = _ref$detail.duration;

      console.log('已播放: ', currentTime, '总时长: ', duration);
    },
    onError: function onError(e) {
      console.log('发生错误了');
      console.log(e);
    }
  };
};

exports.default = new Audio();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/example/audio/audio.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/assets/mp3/ybxyq.mp3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ybxyq_59ae4ac.mp3";

/***/ }),

/***/ "./src/pages/example/audio/audio.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/example/audio/audio.cml");
var __cml__script = __webpack_require__("../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/example/audio/audio.cml");


/***/ })

},["./src/pages/example/audio/audio.cml"]);