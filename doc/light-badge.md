# badge

-------

badge图标

### 属性



| 属性名    | 类型           | 必填 | 默认值   | 说明                                         |
| --------- | -------------- | ---- | -------- | -------------------------------------------- |
| value     | String、Number | 否   | 0        | badge里面要显示的内容                        |
| max       | Number         | 否   | 99       | 当value值大于max的时候，显示文本为` ...`     |
| show-zero | Boolean        | 否   | false    | 当value值为0的时候是否显示                   |
| is-dot    | Boolean        | 否   | false    | badge图标是否为一个点                        |
| theme     | String         | 否   | \#ED5050 | badge图标的背景颜色                          |
| size      | String         | 否   | large    | 可选值为'large'(32x32cpx) 'small' (24x24cpx) |
| offset    | Array [x,y]    | 否   | [0,0]    | badge图标相对于原来位置的偏移量              |

### 示例

```vue
<template>
<page title="light-badge">
  <scroller height="{{-1}}">
    <view class="badge-container" c-for="{{badgeData}}">
      <view class="badge-desc">
        <text>{{item.desc}}</text>
      </view>
      <light-badge 
        is-dot="{{item.isDot || false}}" 
        size="{{item.size || 'large'}}" 
        value="{{item.value}}"
        max="{{item.max || 99}}"
        theme="{{item.theme || '#ED5050'}}"
        offset="{{item.offset || [0, 0]}}"
        show-zero="{{item.showZero || false}}"
      >
        <view style="width:100cpx;height:60cpx;border:1px solid #dcdfe6;border-radius:2cpx;display:flex;justify-content:center;align-items:center;"><text>评论</text></view>
      </light-badge>
    </view>
  </scroller>
</page>
</template>
<script>
class LightBadge {

  data = {
    badgeData:[
      {
        desc: '普通badge',
        value: 1
      },
      {
        desc: '红点类型badge',
        isDot: true,
        value: 2
      },
      {
        desc: '自定义颜色badge',
        theme: 'green',
        value: 99,
        max: 999
      },
      {
        desc: 'value撑开的badge',
        value: '888',
        max: 999
      },
      {
        desc: '文本类型的badge',
        value: 'hot!'
      },
      {
        desc: '小的badge',
        size: 'small',
        value: 8
      },
      {
        desc: '超出最大范围的badge',
        max: 10,
        value: '50'
      },
      {
        desc: '自定义位置的badge',
        offset: [30, 50],
        value: 33
      },
      {
        desc: 'value为0时隐藏badge',
        value: 0,
        showZero: false
      },
      {
        desc: 'value为0时显示badge',
        value: 0,
        showZero: true
      }
    ]
  }
}

export default new LightBadge();
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f8f8f8;
}
.badge-container {
  flex-direction: row;
  height: 200cpx;
  align-items: center;
  padding-left:70cpx;
  margin-bottom: 20cpx;
  border:1px solid #dcdfe6;
}
.badge-desc {
  margin-right: 30cpx;
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