# checkboxlabelcard

-------

复选框卡片

### 属性



| 属性名            | 类型    | 必填 | 默认值 | 说明                             |
| ----------------- | ------- | ---- | ------ | -------------------------------- |
| card-title        | String  | 否   | ''     | 卡片label的标题                  |
| card-title-style  | String  | 否   | ''     | 卡片标题的自定义样式             |
| c-style           | String  | 否   | ''     | label卡片包裹层样式              |
| labels-wrap-style | String  | 否   | ''     | 用于配置包裹所有labels的容器样式 |
| label-style       | String  | 否   | ''     | 用于配置单个label的样式          |
| labels            | Array   | 是   | []     | 具体单个label的配置信息          |
| **labels配置**    |         |      |        |                                  |
| label             | String  | 是   |        | 单个lable的文案                  |
| isChecked         | Boolean | 是   |        | 单个label是否选中                |
| disable           | Boolean | 否   |        | 单个label是否禁用                |

### 示例

```vue
<template>
<page title="light-checklabelcard">
  <view class="container">
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center">
      <text >checklabelcard</text>
    </view>
  </view>
  <light-checklabelcard
    card-title="我是标题"
    labels="{{labels}}"
    c-bind:onclick="handleChange1"
    >
    </light-checklabelcard>
    <light-checklabelcard
    card-title="我是标题2"
    labels="{{labels2}}"
    c-bind:onclick="handleChange2"
    >
    </light-checklabelcard>
    <light-checklabelcard
    card-title="省份"
    labels="{{labels3}}"
    c-bind:onclick="handleChange3"
    c-style="width:500cpx;"
    >
    </light-checklabelcard>
    <light-checklabelcard
    card-title="省份-只能选中一个"
    labels="{{labels4}}"
    c-bind:onclick="handleChange4"
    c-style="width:500cpx;"
    >
    </light-checklabelcard>
    
</page>
</template>
<script>
class LightChecklabelCard {

  data = {
    halfShow:false,
    imgSrc:require('../../../assets/images/chameleon.jpg'),
    isChecked1:true,
    isChecked2:false,
    labels:[{
      label:'文案1',
      isChecked:false,
      disable:true,

    },{
      label:'文案2',
      isChecked:false,
    }],
    labels2:[
      {
        label:'文案1',
        isChecked:false,
        disable:true,

      },
      {
        label:'文案2',
        isChecked:false,
      },
      {
        label:'文案2',
        isChecked:false,
      },
      {
        label:'文案2',
        isChecked:false,
      },
      {
        label:'文案2',
        isChecked:false,
      },
      {
        label:'文案2',
        isChecked:false,
      },
      {
        label:'文案2',
        isChecked:false,
      },
      {
        label:'文案2',
        isChecked:false,
      },
      {
        label:'文案2',
        isChecked:false,
      },
    ],
    labels3:[
      {
        label:'浙',
        isChecked:false,
        disable:true,

      },
      {
        label:'杭',
        isChecked:false,
      },
      {
        label:'粤',
        isChecked:false,
      },
      {
        label:'渝',
        isChecked:false,
      },
      {
        label:'丂',
        isChecked:false,
      },
      {
        label:'吖',
        isChecked:false,
      },
      {
        label:'贪',
        isChecked:false,
      },
      {
        label:'琛',
        isChecked:false,
      },
      {
        label:'痴',
        isChecked:false,
      },
      {
        label:'痴',
        isChecked:false,
      },
      {
        label:'黑',
        isChecked:false,
      },
      {
        label:'吉',
        isChecked:false,
      },
      {
        label:'辽',
        isChecked:false,
      },
    ],
    labels4:[
      {
        label:'浙',
        isChecked:false,
        disable:true,

      },
      {
        label:'杭',
        isChecked:false,
      },
      {
        label:'粤',
        isChecked:false,
      },
      {
        label:'渝',
        isChecked:false,
      },
      {
        label:'丂',
        isChecked:false,
      },
      {
        label:'吖',
        isChecked:false,
      },
      {
        label:'贪',
        isChecked:false,
      },
      {
        label:'琛',
        isChecked:false,
      },
      {
        label:'痴',
        isChecked:false,
      },
      {
        label:'痴',
        isChecked:false,
      },
      {
        label:'黑',
        isChecked:false,
      },
      {
        label:'吉',
        isChecked:false,
      },
      {
        label:'辽',
        isChecked:false,
      },
    ]
  }

  computed = {
  }

  watch  = {
  }

  methods = {
    handleChange1(e){
      console.log('e',e);
      console.log('this.labels[e.detail.index]',this.labels[e.detail.index]);
      this.labels[e.detail.index].isChecked = !this.labels[e.detail.index].isChecked 
    },
    handleChange2(e){
      console.log('e',e);
      this.labels2[e.detail.index].isChecked = !this.labels2[e.detail.index].isChecked 
    },
    handleChange3(e){
      console.log('e',e);
      this.labels3[e.detail.index].isChecked = !this.labels3[e.detail.index].isChecked 
    },
    handleChange4(e){
      console.log('e',e);
      this.labels4.forEach((item) => {
        item.isChecked = false
      })
      this.labels4[e.detail.index].isChecked = !this.labels4[e.detail.index].isChecked 
    }
  }
}

export default new LightChecklabelCard();
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
          "light-checklabelcard": "/components/light-checklabelcard/light-checklabelcard"
        },
        "navigationBarTitleText": "c-toast",
        "backgroundTextStyle": "dark",
        "backgroundColor": "#E2E2E2"
    }
}
</script>

```