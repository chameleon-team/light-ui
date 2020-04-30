# checkboxlabel

-------

复选框卡片

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                              |
| ------------------ | ------------ | ---- | ------ | --------------------------------- |
| disable            | Boolean      | 否   | false  | 是否禁用                          |
| label              | String       | 是   | ''     | label卡片的文案                   |
| c-style            | String       | 否   | ''     | label卡片包裹层样式               |
| label-style        | String       | 否   | ''     | 可以自定义文案样式                |
| c-bind:onclick     | EventHandler |      |        | label卡片为禁用情况下点击事件     |
| c-model 或者 value | Boolean      |      |        | label是否默认选中                 |
| has-arrow          | Boolean      | 否   | false  | 是否有右侧箭头                    |
| index              | Number       | 否   | -1     | 具体使用参考 light-checklabelcard |

**注意如果传递value值需要在事件中改变对应的值**

### 示例

```vue
<template>
<page title="light-checklabel">
  <view class="container">
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center">
      <text>checklabel</text>
    </view>
  </view>
  <view class="checkbox-container">
    <text>不可用</text>
    <light-checklabel
    label="我是label"
    disable="{{true}}"
    >
    </light-checklabel>
  </view>
  <view class="checkbox-container">
    <text>箭头</text>
    <light-checklabel
    has-arrow="{{true}}"
    label="我是label"
    c-bind:onclick="handleChange1"
    >
    </light-checklabel>
  </view>
  <view class="checkbox-container">
    <text>可用-默认不选中</text>
    <light-checklabel
    label="选项文案最长不能查过14个，字数超过14个的用省略号代替"
    c-model="{{isChecked2}}"
    c-bind:onclick="handleChange2"
    >
    </light-checklabel>
  </view>
  <view class="checkbox-container">
    <text>value传递-默认不选中</text>
    <light-checklabel
    label="我是选项"
    value="{{isChecked3}}"
    c-bind:onclick="handleChange3"
    >
    </light-checklabel>
  </view>
</page>
</template>
<script>
class LightChecklabel {

  data = {
    halfShow:false,
    isChecked1:true,
    isChecked2:false,
    isChecked3:false
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
      console.log('this.isChecked2',this.isChecked3)
    },
    handleChange3(e){
      console.log('e',e);
      console.log('this.isChecked3',this.isChecked3);
      this.isChecked3 = !this.isChecked3;
    }
  }
  
}

export default new LightChecklabel();
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

</style>
<script cml-type="json">
{
    "base": {
        "usingComponents": {
          "light-checklabel": "@cmlkit/light-ui/components/light-checklabel/light-checklabel"
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
| <img src="../assets/images/web/web-checklabel.jpg" width="200px" /> | <img src="../assets/images/weex/weex-checklabel.jpg" width="200px" /> | <img src="../assets/images/wx/wx-checklabel.png" width="200px" /> | <img src="../assets/images/alipay/ali-checklabel.png" width="200px" /> | <img src="../assets/images/baidu/baidu-checklabel.png" width="200px" /> | <img src="../assets/images/qq/qq-checklabel.png" width="200px" /> |