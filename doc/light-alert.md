# alert

-------

alert弹层

### 属性



| 属性名     | 类型    | 必填 | 默认值 | 说明                   |
| ---------- | ------- | ---- | ------ | ---------------------- |
| show       | Boolean | 是   | false  | 控制alert弹层是否显示  |
| title      | String  | 是   | ''     | alert弹层的标题        |
| content    | String  | 是   | ''     | alert弹层的内容        |
| show-close | Boolean | 否   | false  | 是否显示右上角关闭图标 |
| closeIcon  | String  | 否   |        | 右上角图标地址         |


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
          "c-header": "../../components/c-header/c-header",
          "light-alert": "/components/light-alert/light-alert"
        },
        "navigationBarTitleText": "c-toast",
        "backgroundTextStyle": "dark",
        "backgroundColor": "#E2E2E2"
    }
}
</script>

```