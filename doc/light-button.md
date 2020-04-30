# button

-------

按钮

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| text            | String     | 否  | ''  | 按钮的文本                                               |
| size            | String     | 否  | large  | 按钮的size： 支持 large、medium、small、mini四种                                              |
| width            | Number     | 否  | -1  | 按钮的宽度值                                               |
| type            | String     | 否  | default  | 按钮的类型，支持配置：default、primary                                               |
| disabled            | Boolean     | 否  | false  | 按钮是否禁用                                              |
| textStyle            | String     | 否  | '' | 按钮文本的样式                                               |
| textStyleDisabled            | String     | 否  | '' | 按钮文本禁用的样式                                               |
| disabledStyle            | String     | 否  | '' | 按钮禁用时的样式                                               |
| btnHoverStyle            | String     | 否  | '' | 按钮hover时的样式                                               |
| textHoverStyle            | String     | 否  | '' | 按钮文本hover时的样式                                               |
| c-bind:onClick            | EventHandle     | 否  |   | 点击按钮时触发的事件                                               |










### 示例

```vue
<template>
<page title="light-button">
  <scroller height="{{-1}}">
    <view class="content">
      <view class="btn-item" c-for="{{btn}}">
        <view class="btn-label">
          <text>{{item.label}}</text>
        </view>
        <view class="btn">
          <light-button
            text="{{item.text}}"
            size="{{item.size}}"
            type="{{item.type}}"
            disabled="{{item.disabled}}"
            c-bind:onClick="handleClick"
          ></light-button>
        </view>
      </view>
    
    </view>
  </scroller>
</page>
</template>
<script>
import cml from "chameleon-api";
class LightButton {

  data = {
    btn: [
      {
        label: '默认大按钮：',
        text: '按钮',
        size: 'large',
        type: 'default',
        disabled: false
      },
      { 
        label: '品牌色大按钮：',
        text: '按钮',
        size: 'large',
        type: 'primary',
        disabled: false
      },
      { 
        label: '禁用的默认大按钮',
        text: '禁用状态',
        size: 'large',
        type: 'default',
        disabled: true
      },
      { 
        label: '禁用的品牌色大按钮',
        text: '禁用状态',
        size: 'large',
        type: 'primary',
        disabled: true
      },
      { 
        label: '默认中等按钮',
        text: '按钮',
        size: 'medium',
        type: 'default',
        disabled: false
      },
      { 
        label: '品牌色中等按钮',
        text: '按钮',
        size: 'medium',
        type: 'primary',
        disabled: false
      },
      { 
        label: '禁用的默认中等按钮',
        text: '按钮',
        size: 'medium',
        type: 'default',
        disabled: true
      },
      { 
        label: '禁用的品牌色中等按钮',
        text: '按钮',
        size: 'medium',
        type: 'primary',
        disabled: true
      },
      { 
        label: '默认小型按钮',
        text: '按钮',
        size: 'small',
        type: 'default',
        disabled: false
      },
      { 
        label: '品牌色小型按钮',
        text: '按钮',
        size: 'small',
        type: 'primary',
        disabled: false
      },
       { 
        label: '品牌色mini按钮',
        text: '按钮',
        size: 'mini',
        type: 'primary',
        disabled: false
      },
       { 
        label: '品牌色mini按钮',
        text: '按钮',
        size: 'mini',
        type: 'default',
        disabled: false
      },
    ]
  }
  methods = {
    handleClick(e) {
      cml.showToast({
        message: JSON.stringify(e.detail),
        duration: 1000
      })
    }
  }
}

export default new LightButton();
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f8f8f8;
}
.btn {
  margin-top: 20cpx;
}
.btn-item {
  margin-top: 30cpx;
  padding: 0 20cpx;
}
.content {
  padding-bottom: 60cpx;
}
</style>
<script cml-type="json">
{
    "base": {
        "usingComponents": {
          "light-button": "@cmlkit/light-ui/components/light-button/light-button"
        },
        "backgroundTextStyle": "dark"
    }
}
</script>

```

### 效果图

| web                                                          | weex                                                         | wx                                                           | alipay                                                       | baidu                                                        | qq                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="../assets/images/web/web-button.jpg" width="200px" /> | <img src="../assets/images/weex/weex-button.jpg" width="200px" /> | <img src="../assets/images/wx/wx-button.png" width="200px" /> | <img src="../assets/images/alipay/ali-button.png" width="200px" /> | <img src="../assets/images/baidu/baidu-button.png" width="200px" /> | <img src="../assets/images/qq/qq-button.png" width="200px" /> |