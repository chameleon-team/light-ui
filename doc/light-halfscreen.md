# halfscreen

-------

全屏弹层

### 属性



| 属性名       | 类型    | 必填 | 默认值 | 说明                 |
| ------------ | ------- | ---- | ------ | -------------------- |
| show         | Boolean | 是   | false  | 控制半屏弹窗显示与否 |
| img-src      | String  | 否   | ''     | 控制是否有顶部图片   |
| main-title   | String  | 否   | ''     | 半屏弹窗主标题       |
| sub-title    | String  | 否   | ''     | 半屏弹窗副标题       |
| confirm-text | String  | 否   | ''     | 确认文案             |
| cancel-text  | String  | 否   | ''     | 取消文案             |

### 示例

```vue
<template>
<page title="light-halfscreen">
  <view class="container">
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center">
      <text c-bind:tap="handleTap">打开半屏弹窗</text>
    </view>

    <light-halfscreen 
      show="{{halfShow}}" 
      c-bind:close="closeHalfScreen"
      c-bind:confirm="handleConfirm"
      c-bind:cancel="handleCancel"
      confirm-text="主要操作"
      cancel-text="次要操作"
      cancel-style="color:green"
      main-title="主标题主标题主标题主标题主标题主标题主标题主标题"
      sub-title="副标题"
      >
      <view style="height:400cpx;"><text>this is content</text></view>
    </light-halfscreen>

  </view>
</page>
</template>
<script>
class LightHalfscreen {

  data = {
    halfShow:false,
    imgSrc:require('../../../assets/images/chameleon.jpg')
  }

  computed = {
  }

  watch  = {
  }

  methods = {
    closeHalfScreen(){
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

export default new LightHalfscreen();
</script>
<style scoped lang="less">
@import '../../../assets/css/var.less';
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f8f8f8;
}
.btn {
  margin-top: 20cpx;
}

</style>
<script cml-type="json">
{
    "base": {
        "usingComponents": {
          "light-halfscreen": "/components/light-halfscreen/light-halfscreen"
        },
        "navigationBarTitleText": "c-toast",
        "backgroundTextStyle": "dark",
        "backgroundColor": "#E2E2E2"
    }
}
</script>

```