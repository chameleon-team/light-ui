# alert

-------

alert弹层

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
  methods = {
    handleChange1(e){
      //c-model传递的值默认会改变
      console.log('e',e);
      console.log('this.isChecked1',this.isChecked1)
    },
    handleChange2(e){
      console.log('e',e);
      //c-model本身就是value作为属性值传递的语法糖，这里也可以传递value值，然后改变它
      console.log('this.isChecked2',this.isChecked2);
      this.isChecked2 = !this.isChecked2;
    },
  }
  
}

export default new LightCheckbox();
</script>
<style scoped lang="less">
@import '../../../assets/css/var.less';
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
        },
        "navigationBarTitleText": "c-toast",
        "backgroundTextStyle": "dark",
        "backgroundColor": "#E2E2E2"
    }
}
</script>

```