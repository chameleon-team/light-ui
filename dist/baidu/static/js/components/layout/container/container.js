var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([37],{

/***/ "../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/container/container.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CContainer = function CContainer() {
  _classCallCheck(this, CContainer);

  this.props = {
    direction: {
      type: String,
      default: 'row'
    }
  };
  this.computed = {
    isVertical: function isVertical() {
      if (this.direction === 'column') {
        return true;
      } else if (this.direction === 'row') {
        return false;
      }
    },
    containerStyle: function containerStyle() {
      var finalStyle = '';

      if (this.isVertical) {
        finalStyle = "flex-direction:column";
      }
      return finalStyle;
    }
  };
};

exports.default = new CContainer();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/container/container.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/layout/container/container.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/container/container.cml");
var __cml__script = __webpack_require__("../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/container/container.cml");


/***/ })

},["./src/components/layout/container/container.cml"]);