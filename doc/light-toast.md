# toast

-------

通用提示框

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| type            | String     | 否  | loading  | 提示框的类型，类型支持：loading、success、warn                                              |
| message            | String     | 否  | ''  |    提示框的文本信息                                           |
| duration            | Number     | 否  | 3000  |    提示框的持续时间，默认为3000毫秒                                          |
| show            | Boolean     | 否  | false  |    是否展示提示框                                          |
| mask            | Boolean     | 否  | false  |    是否展示黑色蒙层                                           |
| icon            | Boolean     | 否  | ''  |    icon的url                                           |
| needIcon            | Boolean     | 是  | true  |   是否展示icon                                           |
| c-bind:show            | EventHandle     | 否  |   |   状态改变时触发的事件, event.detail={value: false}                                           |


### 示例

```vue
<template>
  <page title="{{'light-toast'}}">
    <light-toast 
      show="{{show}}" 
      type="{{'warn'}}"
      message="{{'这是一段message'}}"
      duration="{{duration}}"
      c-bind:show="toogleShow"
    ></light-toast>
    <view class="operator">
      <button c-bind:onclick="toogleShow" text="toogle toast"></button>
    </view>
  </page>
</template>

<script>

class LightToast   {

  data = {
    show: false,
    duration: 2000,
    icon: 'http://static.didialift.com/pinche/gift/resource/avatar-6e3a1ee2154fb40aa3afb1cdec39c471.png'
  }
  computed = {

  }

  methods = {
    toogleShow() {
      this.show = !this.show;
    }

  }
  
}

export default new LightToast();
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f8f8f8;
}
.content {
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
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
      "light-toast": "@cmlkit/light-ui/components/light-toast/light-toast"
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
| <img src="../assets/images/web/web-toast.jpg" width="200px" /> | <img src="../assets/images/weex/weex-toast.jpg" width="200px" /> | <img src="../assets/images/wx/wx-toast.png" width="200px" /> | <img src="../assets/images/alipay/ali-toast.png" width="200px" /> | <img src="../assets/images/baidu/baidu-toast.png" width="200px" /> | <img src="../assets/images/qq/qq-toast.png" width="200px" /> |