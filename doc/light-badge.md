# badge

-------

徽章

### 属性



| 属性名             | 类型         | 必填 | 默认值 | 说明                                                     |
| ------------------ | ------------ | ---- | ------ | -------------------------------------------------------- |
| value            | Number/String      | 否   | 0  | badge上显示的数值                                                |
| max            | Number/String       | 否   | 99     | 最大值，超过该值显示加号                                          |
| showZero           | Boolean       | 否  | false     | 当传进来value为零时， 是否显示badge                                           |
| isDot            | Boolean       | 否   | false     | 是否显示为一个点                                           |
| theme            | String       | 否   | #ED5050     | 颜色主题色值                                           |
| size            |  String       | 否   | large     | badge的size， 支持large、small两种，其中large的尺寸为32✖️32, small的尺寸为24✖️24，单位cpx                                           |
| offset            | Array       | 否   | [0, 0]     | 相对于原始位置的偏移量，单位为cpx,原始位置默认右上角切线交点                                          |
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
          "light-badge": "@cmlkit/light-ui/components/light-badge/light-badge"
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
| <img src="../assets/images/web/web-badge.png" width="200px" /> | <img src="../assets/images/weex/weex-badge.jpg" width="200px" /> | <img src="../assets/images/wx/wx-badge.png" width="200px" /> | <img src="../assets/images/alipay/ali-badge.png" width="200px" /> | <img src="../assets/images/baidu/baidu-badge.png" width="200px" /> | <img src="../assets/images/qq/qq-badge.png" width="200px" /> |