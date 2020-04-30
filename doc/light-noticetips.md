# noticetips

-------

页面顶部的通用im推送通知条，支持用户上滑关闭

### 属性


| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| show            | Boolean     | 否  | false  | 是否显示通知条                       |
| height            | Number/String     | 否  | false  | 通知条的高度，默认是200                       |
| icon            | String     | 否  | ''  | icon的url                       |
| title            | String     | 是  | ''  | 通知条的title                       |
| text            | String     | 是  | ''  | 通知条的文本内容                       |
| theme            | String     | 否  | '#35406B'  | 通知条的主题                       |
| zIndex            | Number     | 否  | 9  | 通知条的z-index值                       |
| duration            | Number     | 否  | 5000  | 通知条的持续时间，默认是5000毫秒                       |
| c-bind:close            | EventHandle     | 否  |   | 通知条关闭时触发的事件                       |
| c-bind:onclick            | EventHandle     | 否  |   | 点击通知条时触发的事件                       |



### 示例

```vue
<template>
  <page title="light-noticetips">
    <light-noticetips
      show="{{show}}"
      icon="{{icon}}"
      title="{{'消息类别'}}"
      text="{{'这里是消息内容最多支持两行这里是消息内容最多这里是消息内容最多这里是消息内容最多这里是消息内容最多'}}"
      duration="{{5000}}"
      c-bind:close="hide"
      c-bind:onclick="handleNoticeClick"
    >
    </light-noticetips>
    <view class="operator">
      <button text="点击打开noticetip" c-bind:onclick="open"></button>
      <text>Tip: 当noticetip打开时，你可以上滑关闭它，也可等待它自动关闭(默认的关闭时间是5秒) </text>
    </view>
   <!-- <cml-console/> -->
  </page>
</template>

<script>
import cml from 'chameleon-api';

class LightNoticeTips   {

  data = {
    show: false,
    icon: require('./images/icon.jpg')
  }

  methods = {
    open() {
      this.show = true
    },
    hide() {
      this.show = false
    },
    handleNoticeClick() {
      cml.showToast({
        message: '点击了noticeTips'
      })
    }
  }
  
}

export default new LightNoticeTips();
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
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
      "light-noticetips": "@cmlkit/light-ui/components/light-noticetips/light-noticetips"
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
| <img src="../assets/images/web/web-noticetips.jpg" width="200px" /> | <img src="../assets/images/weex/weex-noticetips.jpg" width="200px" /> | <img src="../assets/images/wx/wx-noticetips.png" width="200px" /> | <img src="../assets/images/alipay/ali-noticetips.png" width="200px" /> | <img src="../assets/images/baidu/baidu-noticetips.png" width="200px" /> | <img src="../assets/images/qq/qq-noticetips.png" width="200px" /> |