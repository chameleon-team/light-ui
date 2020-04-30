# checkboxcard

-------

复选框卡片

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| disable            | Boolean      | 否   | false  | 是否禁用                                                 |
| c-style            | String       | 否   | ''     | 卡片包裹层样式                                           |
| main-title         | String       | 否   | ''     | 卡片主标题                                               |
| main-title-style   | String       | 否   | ''     | 定义卡片主标题样式                                       |
| sub-title          | String       | 否   | ''     | 卡片副标题                                               |
| sub-title-style    | String       | 否   | ''     | 定义卡片副标题样式                                       |
| use-check-img      | Boolean      | 否   | true   | 定义复选框是否用图片                                     |
| box-style          | String       | 否   | ''     | 可以自定义checkbox外框样式，use-check-img为false时可用   |
| check-style        | String       | 否   | ''     | 可以自定义checkbox对号的样式，use-check-img为false时可用 |
| c-bind:change      | EventHandler |      |        | checkbox值改变的时候触发的事件                           |
| c-model 或者 value | Boolean      |      |        | checkbox是否默认选中                                     |

**注意如果传递value值需要在事件中改变对应的值**

### 示例

```vue

<template>
<page title="light-checkboxcard">
  <view class="container">
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center">
      <text >checkboxcard</text>
    </view>
  </view>
  <view class="checkbox-container">
    <light-checkboxcard
    disable="{{true}}"
    main-title="我是主标题"
    sub-title="我是副标题"
    >
    </light-checkboxcard>
  </view>
  <view class="checkbox-container">
    <light-checkboxcard
     main-title="我是主标题我是主标题我是主标题我是主标题我是主标题"
    sub-title="我是副标题"
    c-model="{{isChecked1}}"
    c-bind:change="handleChange1"
    >
    </light-checkboxcard>
  </view>
  <view class="checkbox-container">
    <light-checkboxcard
      main-title="我是主标题"
      sub-title="我是副标题"
      main-title-style="font-size:30cpx;"
      value="{{isChecked2}}"
      c-bind:change="handleChange2"
    >
    </light-checkboxcard>
  </view>
</page>
</template>
<script>
class LightCheckboxCard {

  data = {
    halfShow:false,
    isChecked1:true,
    isChecked2:false
  }

  computed = {
  }

  watch  = {
  }

  methods = {
    handleChange1(e){
      console.log('e',e);
      console.log('this.isChecked1',this.isChecked1)
    },
    handleChange2(e){
      console.log('e',e);
      this.isChecked2 = !this.isChecked2;
    }
  }
}

export default new LightCheckboxCard();
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
.checkbox-container{
  border:1cpx solid #ECEDF0;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-around;
  height:200cpx;
}

.btn {
  margin-top: 20cpx;
}
.hf-title{
  display:flex;
  flex-direction:row;
  background-color:#FFFFFF;
  height:136cpx;
}
.hf-main-title{
  color:#2A2D3C;
  font-size:40cpx;
  font-weight:bold;
}
.hf-operation{
  display:flex;
  flex-direction:row;
  align-self:flex-end;
}

.hf-ope-text{
  font-size:28cpx;
  font-weight:Normal;
  color:#2A2D3C;
}
.hf-arrow{
    width: 10cpx;
    height: 10cpx;
    border-top: 2cpx solid #2A2D3C;
    border-right: 2cpx solid #2A2D3C;
    transform: rotate(45deg);

}
</style>
<script cml-type="json">
{
    "base": {
        "usingComponents": {
          "light-checkboxcard": "@cmlkit/light-ui/components/light-checkboxcard/light-checkboxcard"
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
| <img src="../assets/images/web/web-checkboxcard.jpg" width="200px" /> | <img src="../assets/images/weex/weex-checkboxcard.jpg" width="200px" /> | <img src="../assets/images/wx/wx-checkcard.png" width="200px" /> | <img src="../assets/images/alipay/ali-checkboxcard.png" width="200px" /> | <img src="../assets/images/baidu/baidu-checkboxcard.png" width="200px" /> | <img src="../assets/images/qq/qq-checkboxcard.png" width="200px" /> |

