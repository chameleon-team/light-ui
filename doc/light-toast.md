# toast

-------

toast弹窗

### 属性



| 属性名   | 类型    | 必填 | 默认值    | 说明                                                         |
| -------- | ------- | ---- | --------- | ------------------------------------------------------------ |
| show     | Boolean | 否   | false     | 是否显示                                                     |
| mask     | Boolean | 否   | false     | 是否增加蒙版                                                 |
| message  | String  | 否   | ''        | 提示信息                                                     |
| theme    | String  | 否   | ''        | 提示信息的背景色                                             |
| duration | Number  | 否   | 3000(ms)  | toast提示显示时长(ms)                                        |
| needIcon | Boolean | 否   | true      | 是否需要图标                                                 |
| type     | String  | 否   | 'loading' | toast图标的类型，内置三种图标<br />可取值为'loading'、'success'、'warn' |
| icon     | String  | 否   | ''        | toast图标地址，支持开发者自定义图标                          |

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