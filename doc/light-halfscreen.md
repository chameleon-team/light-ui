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
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center;height:100cpx;">
      <text c-bind:tap="handleTap">打开半屏弹窗-两行标题</text>
    </view>
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center;height:100cpx;">
      <text c-bind:tap="handleTap1">打开半屏弹窗-一行标题</text>
    </view>
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center;height:100cpx;">
      <text c-bind:tap="handleTap2">打开半屏弹窗-无副标题</text>
    </view>

    <light-halfscreen 
      show="{{halfShow}}" 
      c-bind:close="closeHalfScreen"
      c-bind:confirm="handleConfirm"
      c-bind:cancel="handleCancel"
      confirm-text="主要操作"
      cancel-text="次要操作"
      main-title="主标题主标题主标题主标题主标题主标题主标题主标题"
      sub-title="副标题"
      >
      <view style="height:400cpx;"><text>this is content</text></view>
    </light-halfscreen>
    <light-halfscreen 
      show="{{halfShow1}}" 
      c-bind:close="closeHalfScreen1"
      c-bind:confirm="handleConfirm"
      c-bind:cancel="handleCancel"
      confirm-text="主要操作"
      main-title="主标题主标题主标题主"
      sub-title="副标题"
      >
      <view style="height:400cpx;"><text>this is content</text></view>
    </light-halfscreen>
    <light-halfscreen 
      show="{{halfShow2}}" 
      c-bind:close="closeHalfScreen2"
      c-bind:confirm="handleConfirm"
      c-bind:cancel="handleCancel"
      confirm-text="主要操作"
      main-title="主标题主标题主标题主"
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
    halfShow1:false,
    halfShow2:false,
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
    closeHalfScreen1(){
      this.halfShow1 = false;
    },
    handleTap1(){
      this.halfShow1 = true;
    },
    closeHalfScreen2(){
      this.halfShow2 = false;
    },
    handleTap2(){
      this.halfShow2 = true;
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
          "light-halfscreen": "@cmlkit/light-ui/components/light-halfscreen/light-halfscreen"
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
| <img src="../assets/images/web/web-halfscreen.jpg" width="200px" /> | <img src="../assets/images/weex/weex-halfscreen.jpg" width="200px" /> | <img src="../assets/images/wx/wx-halfscreen.png" width="200px" /> | <img src="../assets/images/alipay/ali-halfscreen.png" width="200px" /> | <img src="../assets/images/baidu/baidu-halfscreen.png" width="200px" /> | <img src="../assets/images/qq/qq-halfscreen.png" width="200px" /> |