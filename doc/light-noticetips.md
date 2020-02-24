# noticetips

-------

Noticetips弹层

### 属性



| 属性名         | 类型         | 必填 | 默认值   | 说明                                         |
| -------------- | ------------ | ---- | -------- | -------------------------------------------- |
| show           | Boolean      | 是   | false    | noticetips是否显示                           |
| height         | Number       | 否   | 20       | noticetips的高度，默认80cpx                  |
| theme          | String       | 否   | \#35406B | noticetips的背景色                           |
| icon           | String       | 否   | ''       | noticetips的左边展示图标                     |
| title          | String       | 是   | ''       | noticetips的主标题                           |
| text           | String       | 是   | ''       | noticetips的提示内容                         |
| duration       | Number       | 否   | 5000ms   | noticetips默认显示时间，到达该时间则自动关闭 |
| c-bind:onclick | EventHandler |      |          | noticetips点击事件                           |
| c-bind:close   | EventHandler |      |          | 向上滑动关闭noticetips的时候的关闭事件       |

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