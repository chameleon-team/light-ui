var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([38],{

/***/ "../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/col/col.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CCol = function CCol() {
  _classCallCheck(this, CCol);

  this.props = {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    margin: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    colStyle: function colStyle() {
      var style = '';
      if (this.height) {
        style = 'height:' + this.height + 'cpx;';
      }
      if (this.width) {
        style += 'width:' + this.width + 'cpx;';
      }
      if (this.backgroundColor) {
        style += 'background-color:' + this.backgroundColor + ';';
      }
      if (this.margin) {
        var mr = this.margin / 2;
        style += 'margin-right:' + mr + 'cpx;margin-left:' + mr + 'cpx;';
      }
      return style;
    }
  };
};

exports.default = new CCol();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/col/col.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/layout/col/col.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/col/col.cml");
var __cml__script = __webpack_require__("../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/layout/col/col.cml");


/***/ })

},["./src/components/layout/col/col.cml"]);