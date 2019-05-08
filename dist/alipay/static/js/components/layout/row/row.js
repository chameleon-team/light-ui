var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([33],{

/***/ "../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/row/row.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CRow = function CRow() {
  _classCallCheck(this, CRow);

  this.props = {
    // start/end/center/space-around/space-between
    justify: {
      type: String,
      default: 'center'
    },
    // top/middle/bottom
    align: {
      type: String,
      default: 'middle'
    },
    height: {
      type: Number,
      default: 0
    },
    wrap: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    rowClass: function rowClass() {
      return 'flex-row-' + this.justify + '-' + this.align;
    },
    rowStyle: function rowStyle() {
      var style = '';
      if (this.height) {
        style += 'height:' + this.height + 'cpx;';
      }
      if (this.wrap) {
        style += 'flex-wrap:wrap;';
      }
      if (this.margin) {
        style += 'margin:' + this.margin / 2 + 'cpx 0;';
      }
      return style;
    }
  };
};

exports.default = new CRow();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/row/row.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/layout/row/row.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/row/row.cml");
var __cml__script = __webpack_require__("../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/row/row.cml");


/***/ })

},["./src/components/layout/row/row.cml"]);