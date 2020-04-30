# bartips

-------

通用顶部通知条

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| show            | Boolean     | 否  | false  | 是否显示通知条                                               |
| height            | Nubmer/String     | 否  | 80  | 通知条的高度，默认为80cpx                                               |
| icon            | String     | 否  | ''  |   左侧icon的url                                           |
| text            | String     | 否  | ''  | 通知条的文本内容                                             |
| operateIcon            | String     | 否  | ''  | 右侧操作区域icon的url                                               |
| theme            | String     | 否  | #35406B  | 通知条的颜色主题                                               |
| zIndex            | Number     | 否  | 9  | 通知条的z-index值                                               |
| c-bind:onclick            | EventHandle     | 否  |   | 点击通知条时触发的事件                                             |
| c-bind:operate            | EventHandle     | 否  |   | 点击通知条右侧操作符时触发的事件                                             |




### 示例

```vue
<template>
  <page title="light-bartips">
   <light-bartips
      show="{{show}}"
      height="{{80}}"
      icon="{{icon}}"
      zIndex="{{99}}"
      operate-icon="{{operateIcon}}"
      text="我是文案要简短居中我是文案要简短居中我是文案要简短居中我是文案要简短居中"
      c-bind:onclick="handleClick"
      c-bind:operate="handleOperate"
    >
    </light-bartips>  
    <view class="operator">
      <button c-bind:onclick="toogleShow" text="切换bartips状态"></button>
    </view>
  </page>
</template>

<script>
import cml from 'chameleon-api';

class LightBartips   {

  data = {
    icon: require('./images/icon.png'),
    operateIcon: require('./images/right_arrow.png'),
    show: false,
  }
  computed = {

  }

  methods = {
    handleClick() {
      cml.showToast({
        message: '点击了bartips',
      })
    },
    handleOperate() {
      cml.showToast({
        message: '点击了bartips的操作符号'
      })
    },
    toogleShow() {
      this.show = !this.show;
    }


  }
  
}

export default new LightBartips();
</script>

<style>
.container {
}
.operator {
  margin-top: 40cpx;
  padding: 20cpx;
}
</style>

<script cml-type="json">
{
  "base": {
    "usingComponents": {
      "light-bartips": "@cmlkit/light-ui/components/light-bartips/light-bartips"
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
| <img src="../assets/images/web/web-bartips.jpg" width="200px" /> | <img src="../assets/images/weex/weex-bartips.jpg" width="200px" /> | <img src="../assets/images/wx/wx-bartips.png" width="200px" /> | <img src="../assets/images/alipay/ali-bartip.png" width="200px" /> | <img src="../assets/images/baidu/baidu-bartips.png" width="200px" /> | <img src="../assets/images/qq/qq-bartips.png" width="200px" /> |