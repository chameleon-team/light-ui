halfscreen# fullscreen

-------

全屏弹层

### 属性



| 属性名        | 类型    | 必填 | 默认值 | 说明                 |
| ------------- | ------- | ---- | ------ | -------------------- |
| show          | Boolean | 是   | false  | 控制全屏弹窗显示与否 |
| confirm-text  | String  | 否   | ''     | 确认文案             |
| cancel-text   | String  | 否   | ''     | 取消文案             |
| confirm-style | String  | 否   | ''     | 自定义确认文案的样式 |
| cancel-style  | String  | 否   | ''     | 自定义取消文案的样式 |
|               |         |      |        |                      |
|               |         |      |        |                      |
|               |         |      |        |                      |

### 示例

```vue
<template>
<page title="light-fullscreen">
  <view class="container">
    <c-header title="light-fullscreen"></c-header>
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center">
      <text c-bind:tap="handleTap">打开全屏弹窗</text>
    </view>

    <light-fullscreen 
      show="{{halfShow}}" 
      c-bind:close="closeFullScreen"
      c-bind:confirm="handleConfirm"
      c-bind:cancel="handleCancel"
      confirm-text="主要操作"
      cancel-text="次要操作"
      cancel-style="color:green"
      >
      <view style="height:600cpx;" class="content"><text>this is content</text></view>
    </light-fullscreen>

  </view>
</page>
</template>
<script>
class LightFullscreen {

  data = {
    halfShow:false,
    imgSrc:require('../../../assets/images/chameleon.jpg')
  }

  computed = {
  }

  watch  = {
  }

  methods = {
    closeFullScreen(){
      this.halfShow = false;
    },
    handleTap(){
      this.halfShow = true;
    },
    handleConfirm(){
      console.log('handleConfirm');
    },
    handleCancel(){
      console.log('handleCancel')
    }
  }

}

export default new LightFullscreen();
</script>
<style scoped lang="less">
@import '../../../assets/css/var.less';
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f8f8f8;
}
.content{
  display:flex;
  justify-content: center;
  align-items: center;
}
.btn {
  margin-top: 20cpx;
}

</style>
<script cml-type="json">
{
    "base": {
        "usingComponents": {
          "light-fullscreen": "/components/light-fullscreen/light-fullscreen"
        },
        "navigationBarTitleText": "c-toast",
        "backgroundTextStyle": "dark",
        "backgroundColor": "#E2E2E2"
    }
}
</script>

```