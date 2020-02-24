# switch

-------

switch开关

### 属性



| 属性名        | 类型    | 必填 | 默认值   | 说明                            |
| ------------- | ------- | ---- | -------- | ------------------------------- |
| disabled      | Boolean | 否   | false    | switch开关是否禁用              |
| checked       | Boolean | 否   | false    | switch开关是否选中              |
| theme         | String  | 否   | \#1D6EF0 | switch开关选中状态的背景色      |
| width         | Number  | 否   | 80       | switch开关的默认宽度，默认80cpx |
| checkedText   | String  | 否   | ''       | switch开关选中时所展示的文案    |
| uncheckedText | String  | 否   | ''       | switch开关未选中时所展示的文案  |

### 示例

```vue
<template>
<page title="light-button">
  <view class="container">
    <view class="switch-line" c-for="{{switchData}}">
      <text class="switch-desc">{{item.desc}}</text>
      <light-switch
        checked="{{item.checked}}"
        disabled="{{item.disabled}}"
        width="{{item.width || 80}}"
        theme="{{item.theme || '#1D6EF0'}}"
        checked-text="{{item.checkedText}}"
        unchecked-text="{{item.uncheckedText}}"
        c-bind:change="toggleSwitch(index, $event)"
      >
      </light-switch>
    </view>
  </view>
</page>
</template>
<script>
import cml from 'chameleon-api';

class LigthSwitch {

  data = {
    switchData:[
      {
        desc: '默认的switch',
        checked: false,
        disabled: false
      },
      {
        desc: '禁用的switch打开',
        checked: true,
        disabled: true,
      },
      {
        desc: '禁用的switch关闭',
        checked: false,
        disabled: true
      },
      { 
        desc: '自定义颜色、宽度的switch',
        checked: true,
        theme: '#ff0000',
        width: 100
      },
      {
        desc: '带有文字说明的switch',
        checked: true,
        theme: 'orange',
        width: '120',
        checkedText: 'ON',
        uncheckedText: 'OFF'
      }
    ],
  }


  methods = {
    toggleSwitch(index, $event) {
      let current = this.switchData[index];
      current.checked = !current.checked;
      this.switchData.splice(index, 1, current);
      cml.showToast({
        message: '当前switch value: ' + JSON.stringify($event.detail.value),
        duration: 500
      })
    },
  }

}

export default new LigthSwitch();
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.switch-desc {
  margin-right: 30cpx;
}

.switch-line {
  margin-bottom: 30cpx;
  padding-left: 30cpx;
  flex-direction: row;
  height: 100cpx;
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