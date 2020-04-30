# checkbox

-------

复选框

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| disable            | Boolean      | 否   | false  | 是否禁用                                                 |
| use-check-img      | Boolean      | 否   | true   | 定义复选框是否用图片                                     |
| box-style          | String       | 否   | ''     | 可以自定义checkbox外框样式，use-check-img为false时可用   |
| check-style        | String       | 否   | ''     | 可以自定义checkbox对号的样式，use-check-img为false时可用 |
| c-bind:change      | EventHandler |      |        | checkbox值改变的时候触发的事件                           |
| c-model 或者 value | Boolean      |      |        | checkbox是否默认选中                                     |

**注意如果传递value值需要在事件中改变对应的值**

### 示例

```vue
<template>
<page title="light-checkbox">
  <view class="container">
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center">
      <text >checkbox</text>
    </view>
  </view>
  <view class="checkbox-container">
    <text>不可用</text>
    <light-checkbox
    disable="{{true}}"
    >
    </light-checkbox>
  </view>
  <view class="checkbox-container" c-bind:tap="handleTap">
    <text>可用-默认选中</text>
    <light-checkbox
    c-model="{{isChecked1}}"
    c-bind:change="handleChange1"
    >
    </light-checkbox>
  </view>
  <view class="checkbox-container" c-bind:tap="handleTap">
    <text>可用-默认不选中</text>
    <light-checkbox
    value="{{isChecked2}}"
    c-bind:change="handleChange2"
    >
    </light-checkbox>
  </view>
</page>
</template>
<script>
class LightCheckbox {

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
      console.log('this.isChecked2',this.isChecked2);
      this.isChecked2 = !this.isChecked2;
    },
    handleTap(){
      //测试组件内部tap事件阻止冒泡
      console.log('tap-ck')
    }
  }
  
}

export default new LightCheckbox();
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
          "light-checkbox": "@cmlkit/light-ui/components/light-checkbox/light-checkbox"
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
| <img src="../assets/images/web/web-checkbox.jpg" width="200px" /> | <img src="../assets/images/weex/weex-checkbox.jpg" width="200px" /> | <img src="../assets/images/wx/wx-checkbox.png" width="200px" /> | <img src="../assets/images/alipay/ali-checkbox.png" width="200px" /> | <img src="../assets/images/baidu/baidu-checkbox.png" width="200px" /> | <img src="../assets/images/qq/qq-checkbox.png" width="200px" /> |