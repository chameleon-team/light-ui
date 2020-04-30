# actionsheetlist	

-------

### 属性



| 属性名                   | 类型    | 必填  | 默认值 | 说明                                    |
| ------------------------ | ------- | ----- | ------ | --------------------------------------- |
| show                     | Boolean | 是    | false  | 控制actionsheet显示与否                 |
| btn-text                 | String  | 否    | ''     | 按钮的文案                              |
| btn-style                | String  | 否    | ''     | 自定义按钮样式                          |
| main-text-style          | String  | 否    | ''     | 自定义主标题文案样式                    |
| sub-text-style           | String  | 否    | ''     | 自定义副标题样式                        |
| tag-style                | String  | 否    | ''     | 自定义tag样式                           |
| user-defined             | Boolean | false |        | 是否自定义操作内容                      |
| action-lists             | Array   | 否    | []     | actionsheet的操作列表配置，详细配置如下 |
| **action-lists详细配置** |         |       |        |                                         |
| mainTitle                | String  |       |        | 操作主标题                              |
| subTitle                 | String  |       |        | 操作副标题                              |
| tag                      | String  |       |        | 附属文案                                |

### 示例

```vue
<template>
<page title="light-actionsheetlist">
  <view class="container" >
    <view style="color:#35406B;display:flex;justify-content:center;align-items:center">
      <view c-bind:tap="handleTap" class="button">
        <text>打开ActionSheetList</text>
      </view>
      <view c-bind:tap="handleUserTap" class="button">
        <text>打开用户自定义ActionSheetList</text>
      </view>
    </view>

    <light-actionsheetlist 
      show="{{halfShow}}" 
      c-bind:confirm="handleConfirm"
      c-bind:cancel="handleCancel"
      action-lists="{{actionLists}}"
      >
    </light-actionsheetlist>
    <light-actionsheetlist 
      show="{{useDefineShow}}" 
      c-bind:confirm="handleUserConfirm"
      c-bind:cancel="handleUserCancel"
      user-defined="{{true}}"
      >
       <view class="user-defined">
         <text>这里可以用户自定义内容</text>
       </view>
    </light-actionsheetlist>

  </view>
</page>
</template>
<script>
class LightActionsheetshit {

  data = {
    halfShow:false,
    useDefineShow:false,
    actionLists:[
      {
        mainTitle:"选项操作一",
        subTitle:"附属文案要精简，不要超过20个字",
        tag:"推荐"
      },
      {
        mainTitle:"选项操作一",
        subTitle:"附属文案",
      },
      {
        mainTitle:"选项操作一",
        subTitle:"附属文案",
      }
    ]
  }

  computed = {
  }

  watch  = {
  }

  methods = {
    handleTap(){
      this.halfShow = true;
    },
    handleConfirm(e){
      console.log('handleConfirm',e);
      this.halfShow = false;
    },
    handleCancel(){
      console.log('handleCancel');
      this.halfShow = false;
    },
    handleUserTap(){
      this.useDefineShow = true;
    },
    handleUserConfirm(e){
      console.log('handleConfirm',e);
      this.useDefineShow = false;
    },
    handleUserCancel(){
      console.log('handleCancel');
      this.useDefineShow = false;
    }
  }
}

export default new LightActionsheetshit();
</script>
<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f8f8f8;
}
.btn {
  margin-top: 20cpx;
}

.user-defined{
  height:300cpx;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.button{
  height:100cpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script cml-type="json">
{
    "base": {
        "usingComponents": {
          "light-actionsheetlist": "@cmlkit/light-ui/components/light-actionsheetlist/light-actionsheetlist"
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
| <img src="../assets/images/web/web-actionsheet.jpg" width="200px" /> | <img src="../assets/images/weex/weex-actionsheet.jpg" width="200px" /> | <img src="../assets/images/wx/wx-actionsheet.png" width="200px" /> | <img src="../assets/images/alipay/ali-actionsheet.png" width="200px" /> | <img src="../assets/images/baidu/baidu-actionsheet.png" width="200px" /> | <img src="../assets/images/qq/qq-actionsheet.png" width="200px" /> |