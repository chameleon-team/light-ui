# popup

-------

通用弹出层， alert、fullscreen、halfscreen、bartips等组件基于此组件构建

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| show            | Boolean     | 否  | false  | 是否显示弹出层                                               |
| mask            | Boolean     | 否  | true  | 是否展示黑色蒙层，当mask为false时，页面的其余部分是可操作的                                               |
| zIndex            | Number     | 否  | 9  | 弹出层的z-index                                             |
| position            | String     | 否  | bottom  | 弹出层弹出的方向，可选值 ['top', 'left', 'right', 'bottom', 'center']， 其中left/right时容器必须指定宽度， top/bottom时容器必须指定高度                                            |
| transition            | Boolean     | 否  | true  | 弹出层弹出时是否开启动画，默认开启                                             |
| c-bind:close            | EventHandle     | 否  |   | 点击蒙层时触发的事件                     |



### 示例

```vue
<template>
  <page title="light-popup">
    <light-popup
      show="{{show}}"
      position="{{position}}"
      mask="{{true}}"
      transition="{{true}}"
      c-bind:close="hidePopup"
    >
     <view style="{{contentStyle}}" class="content" >
        <text c-bind:tap="hidePopup">点击关闭popup</text>
      </view>
    </light-popup>
    <view class="operator">
      <button c-bind:onclick="toogleShow" text="popup:left/top/right/bottom/center"></button>
    </view>
  </page>
</template>

<script>
const direction = ['left', 'top', 'right', 'bottom', 'center'];
let clickTime = 0;

class LightPopup   {

  data = {
    icon: '',
    show: false,
    position: direction[0],
  }
  computed = {
    contentStyle() {
      let style = '';
      switch (this.position) {
        case 'right':
        case 'left': 
          style += "width: 300cpx;";
          break;
        case 'top':
        case 'bottom':
          style += "height: 300cpx;"
          break;
        default:
          style += 'height:300cpx;width:600cpx;'
          break;
      }
      return style;
    }

  }

  methods = {
    toogleShow() {
      this.position = direction[clickTime % 5];
      ++clickTime;
      this.show = !this.show;
    },
    hidePopup() {
      this.show = false;
    }


  }
  
}

export default new LightPopup();
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
      "light-popup": "@cmlkit/light-ui/components/light-popup/light-popup"
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
| <img src="../assets/images/web/web-popup.png" width="200px" /> | <img src="../assets/images/weex/weex-popup.jpg" width="200px" /> | <img src="../assets/images/wx/wx-popup.png" width="200px" /> | <img src="../assets/images/alipay/ali-popup.png" width="200px" /> | <img src="../assets/images/baidu/baidu-popup.png" width="200px" /> | <img src="../assets/images/qq/qq-popup.png" width="200px" /> |