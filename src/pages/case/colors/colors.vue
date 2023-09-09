<template>
  <view class="container">
    <view class='doc-body'>
      <view class='panel' v-for="item in colorData" :key="item.type">
        <view class='panel__title text-lg font-bold pl-6 text-blue-500'>{{item.type}}</view>
        <view class='panel__content'>
          <view class='color-list'>
            <view
                v-for="colorItem in item.data"
                :key="colorItem.hex"
                class='color-item'
            >
              <view
                  class='color-item__circle'
                  :style={background:colorItem.hex}
              >
                <view class='inner-circle-1'></view>
                <view
                    class='inner-circle-2'
                    :style={borderColor:colorItem.hex}
                ></view>
              </view>
              <view class='color-item__info'>
                <text class='name'>{{colorItem.name}}</text>
                <text class='hex'>
                  {{colorItem.hex}}
                </text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      colorData: [
        {
          type: '主色',
          data: [
            {
              name: '浅蓝色',
              hex: '#78A4FA'
            },
            {
              name: '品牌蓝',
              hex: '#6190E8'
            },
            {
              name: '深蓝色',
              hex: '#346FC2'
            }
          ]
        },
        {
          type: '辅助色',
          data: [
            {
              name: '蓝色 - Info',
              hex: '#78A4FA'
            },
            {
              name: '绿色 - Positive',
              hex: '#13CE66'
            },
            {
              name: '红色 - Negative',
              hex: '#FF4949'
            },
            {
              name: '黄色 - Warning',
              hex: '#FFC82C'
            }
          ]
        },
        {
          type: '中性色',
          data: [
            {
              name: '黑色 0',
              hex: '#333333'
            },
            {
              name: '黑色 1',
              hex: '#7F7F7F'
            },
            {
              name: '黑色 2',
              hex: '#B2B2B2'
            },
            {
              name: '灰色 0',
              hex: '#333333'
            },
            {
              name: '灰色 1',
              hex: '#666666'
            },
            {
              name: '灰色 2',
              hex: '#999999'
            },
            {
              name: '灰色 3',
              hex: '#CCCCCC'
            },
            {
              name: '灰色 4',
              hex: '#E5E5E5'
            },
            {
              name: '灰色 5',
              hex: '#F0F0F0'
            },
            {
              name: '灰色 6',
              hex: '#F7F7F7'
            }
          ]
        },
        {
          type: '其他色',
          data: [
            {
              name: '边框可选色',
              hex: '#C5D9E8'
            },
            {
              name: '背景色 0',
              hex: '#ECF5FD'
            },
            {
              name: '背景色 1',
              hex: '#FAFBFC'
            }
          ]
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.color-list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}

.color-item {
  margin-bottom: 40px;
  width: 33%;
  text-align: center;

  &__circle {
    position: relative;
    margin: 0 auto;
    width: 150px;
    height: 150px;
    background: #78A4FA;
    border-radius: 50%;

    .inner-circle-1 {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -50px;
      margin-top: -50px;
      width: 100px;
      height: 100px;
      background: #fff;
      border-radius: 50%;
    }

    .inner-circle-2 {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -32px;
      margin-top: -32px;
      width: 64px;
      height: 64px;
      border: 1px solid #78A4FA;
      border-radius: 50%;
      opacity: 0.3;
    }
  }

  &__info {
    margin-top: 20px;
    color: #88889C;
    font-size: 20px;
    text-align: center;

    .name,
    .hex {
      display: block;
    }
  }
}
</style>
