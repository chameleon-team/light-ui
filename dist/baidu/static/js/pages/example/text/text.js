var __CML__GLOBAL = require("../../../manifest.js");
__CML__GLOBAL.webpackJsonp([13],{

/***/ "../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/example/text/text.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Text = function () {
  function Text() {
    _classCallCheck(this, Text);

    this.data = {
      allLine: ["chameleon的目标是Write once run everywhere", "chameleon主要特性: ", "1、简洁强大的构建配置", "2、语法统一、快速上手", "3、方便的数据管理方案", "4、差异化方案", "......"],
      addLine: []
    };
    this.computed = {
      addTextClass: function addTextClass() {
        return this.allLine.length === this.addLine.length ? 'disable-text' : 'active-text';
      },
      removeTextClass: function removeTextClass() {
        return this.addLine.length === 0 ? 'disable-text' : 'active-text';
      }
    };
    this.watch = {};
    this.methods = {
      add: function add() {
        if (this.addLine.length >= this.allLine.length) {
          return;
        }
        this.addLine.push(this.allLine[this.addLine.length]);
      },
      remove: function remove() {
        if (this.addLine.length <= 0) {
          return;
        }
        this.addLine.pop();
      }
    };
  }

  _createClass(Text, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return Text;
}();

exports.default = new Text();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/example/text/text.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/example/text/text.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../new-open-chameleon-sets/packages/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/vue-style-loader/index.js!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/configs/postcss/baidu/.postcssrc.js\"}}!../new-open-chameleon-sets/packages/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../new-open-chameleon-sets/packages/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/example/text/text.cml");
var __cml__script = __webpack_require__("../new-open-chameleon-sets/packages/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/didi/work/chameleon-open/new-open-chameleon-sets/packages/chameleon-tool/chameleon.js\"}!../new-open-chameleon-sets/packages/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/example/text/text.cml");


/***/ })

},["./src/pages/example/text/text.cml"]);