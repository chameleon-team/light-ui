# fullscreen

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

### 示例

```vue
<template>
<page title="light-fullscreen">
  <view class="container">
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center;height:100cpx;">
      <text c-bind:tap="handleTap">打开全屏弹窗</text>
    </view>
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center;height:100cpx;">
      <text c-bind:tap="handleTap1">打开全屏弹窗-一个按钮</text>
    </view>

    <light-fullscreen 
      show="{{halfShow}}" 
      c-bind:close="closeFullScreen"
      c-bind:confirm="handleConfirm"
      c-bind:cancel="handleCancel"
      confirm-text="主要操作"
      cancel-text="次要操作"
      >
      <view style="height:600cpx;" class="content"><text>this is content</text></view>
    </light-fullscreen>
     <light-fullscreen 
      show="{{halfShow1}}" 
      c-bind:close="closeFullScreen1"
      c-bind:confirm="handleConfirm"
      c-bind:cancel="handleCancel"
      confirm-text="主要操作"
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
    halfShow1:false,
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
    closeFullScreen1(){
      this.halfShow1 = false;
    },
    handleTap1(){
      this.halfShow1= true;
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
          "light-fullscreen": "@cmlkit/light-ui/components/light-fullscreen/light-fullscreen"
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
| <img src="../assets/images/web/web-fullscreen.jpg" width="200px" /> | <img src="../assets/images/weex/weex-fullscreen.jpg" width="200px" /> | <img src="../assets/images/wx/wx-fullscreen.png" width="200px" /> | <img src="../assets/images/alipay/ali-fullscreen.png" width="200px" /> | <img src="../assets/images/baidu/baidu-fullscreen.png" width="200px" /> | <img src="../assets/images/qq/qq-fullscreen.png" width="200px" /> |