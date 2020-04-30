# alert

-------

通用弹出框

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| show            | Boolean     | 否  | false  | 是否显示弹出框                                                |
| operator            | Array     | 否  | []  | 弹出框的操作符                                                |
| direction            | String     | 否  | row  | 表示操作符展示时的方向，可选值为row或者column，默认为row                                                |
| title            | String     | 是  |  - | 弹出框的标题                                               |
| content            | String     | 是  | -  | 弹出框的内容                                                |
| showClose            | Boolean     | 否  |  false | 是否弹出框右上角close图标                                                |
| closeIcon            | String     | 否  |  require('./images/close.png') | close图片                                                |
| zIndex            | Number     | 否  |  9 | 弹出框的z-index值                                                |
| c-bind:operate            | EventHandle     | 否  |   | 点击弹出框操作符触发的事件，event.detail={index, text}                                           |


### 示例

```vue
<template>
<page title="light-alert">
  <view class="container">
    <light-alert
      show="{{show}}"
      title="弹框标题"
      content="我是弹框内容我是弹框内容内容我是容我是弹框内容我是弹框内容"
      operator="{{operator}}"
      direction="column"
      show-close="{{true}}"
      c-bind:operate="handleOperate"
      c-bind:close="handleClose"
    ></light-alert>
    <view class="operator">
      <button text="打开弹框" c-bind:onclick="showAlert"></button>
    </view>
  </view>
</page>
</template>
<script>
import cml from 'chameleon-api';
class LightAlert {

  data = {
    show: false,
    operator: [
      {
        text: '按钮文案',
        textStyle: 'color: #555869'
       },
      {
        text: '引导文案',
        textStyle: 'color: #1D6EF0'
      },
      {
        text: '第三个按钮',
        textStyle: 'color: #1D6EF0'
      },
      {
        text: '第四个按钮',
        textStyle: 'color: #1D6EF0'
      }
    ]
  }

  computed = {
  }

  watch  = {
  }

  methods = {
    showAlert() {
      this.show = true
    },
    handleClose() {
      this.show = false;
    },
    handleOperate(e) {
      let { index, text } = e.detail;
      cml.showToast({
        message: `点击第${index + 1}个按钮， 文案为"${text}"` ,
        duration: 800
      });
      this.show = false;
    }
  }
  

  beforeCreate() {
  }

  created() {
  }

  beforeMount() {
  }

  mounted() {
  }

  beforeDestroy() {
  }

  destroyed() {
  }
}

export default new LightAlert();
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f8f8f8;
}
.operator {
  margin-top: 50cpx;
  padding: 20cpx;
}
</style>
<script cml-type="json">
{
    "base": {
        "usingComponents": {
          "light-alert": "@cmlkit/light-ui/components/light-alert/light-alert"
        }
    },
    "wx": {
    "navigationBarTitleText": "index",
    "backgroundTextStyle": "dark",
    "backgroundColor": "#E2E2E2"
  },
  "alipay": {
    "defaultTitle": "index",
    "pullRefresh": false,
    "allowsBounceVertical": "YES",
    "titleBarColor": "#ffffff"
  },
  "baidu": {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "index",
    "backgroundColor": "#ffffff",
    "backgroundTextStyle": "dark",
    "enablePullDownRefresh": false,
    "onReachBottomDistance": 50
  }
}
</script>



```

### 效果图

| web                                                          | weex                                                         | wx                                                           | alipay                                                       | baidu                                                        | qq                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="../assets/images/web/web-alert.jpg" width="200px" /> | <img src="../assets/images/weex/weex-alert.jpg" width="200px" /> | <img src="../assets/images/wx/wx-alert.png" width="200px" /> | <img src="../assets/images/alipay/ali-alert.png" width="200px" /> | <img src="../assets/images/baidu/baidu-alert.png" width="200px" /> | <img src="../assets/images/qq/qq-alert.png" width="200px" /> |

