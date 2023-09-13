<template>
  <view class="container">
    <DocsHeader title="Modal 模态框"></DocsHeader>
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">弹框</view>
        <view class="panel__content">
          <view class="flex flex-col">
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show">一般弹框</zui-button>
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show2">提示文本样式</zui-button>
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show3">单个按钮</zui-button>
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show4">多个按钮</zui-button>
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show5">圆角按钮</zui-button>
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show6">按钮颜色</zui-button>
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show7">遮罩不可点</zui-button>
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show8">自定义弹窗内容</zui-button>
            <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="show9">自定义输入框</zui-button>
          </view>
        </view>
      </view>
    </view>
    <zui-modal :show="modal" @click="handleClick" @cancel="hide" title="提示" content="确定退出登录吗？"></zui-modal>
    <zui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定退出登录吗？" color="#333" :size="32">
    </zui-modal>
    <zui-modal :show="modal3" @click="handleClick3" @cancel="hide3" content="您还未登录，请先登录" :button="button3">
    </zui-modal>
    <zui-modal :show="modal4" @click="handleClick4" @cancel="hide4" content="请选择支付方式" :button="button4"></zui-modal>
    <zui-modal :show="modal5" @click="handleClick5" @cancel="hide5" content="确定退出登录吗？" color="#333" :size="32"
               shape="circle"></zui-modal>
    <zui-modal :show="modal6" @click="handleClick6" @cancel="hide6" content="确定退出登录吗？" color="#333" :size="32"
               :button="button6"></zui-modal>
    <zui-modal :show="modal7" @click="handleClick7" @cancel="hide7" content="您还未登录，请先登录" :button="button3"
               :maskClosable="false"></zui-modal>
    <zui-modal :show="modal8" @cancel="hide8" :custom="true">
      <view class="zui-modal-custom">
        <image src="/static/images/chat/fail.png" class="zui-tips-img"></image>
        <view class="zui-modal-custom-text">我是自定内容</view>
        <zui-button height="72rpx" :size="28" type="danger" shape="circle" @click="handleClick8">确定</zui-button>
      </view>
    </zui-modal>

    <zui-modal :show="modal9" @cancel="hide9" :custom="true" fadeIn>
      <view class="zui-modal-custom">
        <view class="zui-prompt-title">邮箱</view>
        <view class="zui-input__box">
          <input placeholder="请输入邮箱" class="zui-modal-input" v-if="modal9" v-model="email" />
        </view>
        <zui-button height="72rpx" :size="28" shape="circle" @click="handleClick9">立即提交</zui-button>
      </view>
    </zui-modal>
  </view>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      modal2: false,
      modal3: false,
      button3: [{
        text: '确定',
        type: 'red'
      }],
      modal4: false,
      button4: [{
        text: '微信',
        type: 'green',
        plain: true
      },
        {
          text: '支付宝',
          plain: true
        },
        {
          text: '银行卡',
          type: 'red',
          plain: true
        }
      ],
      modal5: false,
      modal6: false,
      button6: [{
        text: '取消',
        type: 'gray'
      },
        {
          text: '确定'
        }
      ],
      modal7: false,
      modal8: false,
      modal9: false,
      email: ''
    };
  },
  methods: {
    show() {
      this.modal = true;
    },
    show2() {
      this.modal2 = true;
    },
    show3() {
      this.modal3 = true;
    },
    show4() {
      this.modal4 = true;
    },
    show5() {
      this.modal5 = true;
    },
    show6() {
      this.modal6 = true;
    },
    show7() {
      this.modal7 = true;
    },
    show8() {
      this.modal8 = true;
    },
    show9() {
      this.modal9 = true;
    },
    hide() {
      this.modal = false;
    },
    hide2() {
      this.modal2 = false;
    },
    hide3() {
      this.modal3 = false;
    },
    hide4() {
      this.modal4 = false;
    },
    hide5() {
      this.modal5 = false;
    },
    hide6() {
      this.modal6 = false;
    },
    hide7() {
      this.modal7 = false;
    },
    hide8() {
      this.modal8 = false;
    },
    hide9() {
      this.modal9 = false;
    },
    handleClick(e) {
      let index = e.index;
      if (index === 0) {
        this.zui.toast('你点击了取消按钮');
      } else {
        this.zui.toast('你点击了确定按钮');
      }
      this.hide();
    },
    handleClick2(e) {
      let index = e.index;
      if (index === 0) {
        this.zui.toast('你点击了取消按钮');
      } else {
        this.zui.toast('你点击了确定按钮');
      }
      this.hide2();
    },
    handleClick3(e) {
      let index = e.index;
      if (index === 0) {
        this.zui.toast('你点击了确定按钮');
      }
      this.hide3();
    },
    handleClick4(e) {
      let index = e.index;
      this.zui.toast('你点击的按钮index：' + index);
      this.hide4();
    },
    handleClick5(e) {
      let index = e.index;
      this.zui.toast('你点击的按钮index：' + index);
      this.hide5();
    },
    handleClick6(e) {
      let index = e.index;
      this.zui.toast('你点击的按钮index：' + index);
      this.hide6();
    },
    handleClick7(e) {
      let index = e.index;
      this.zui.toast('你点击的按钮index：' + index);
      this.hide7();
    },
    handleClick8() {
      this.zui.toast('你点击了自定义按钮');
      this.hide8();
    },
    handleClick9() {
      if (this.email) {
        this.zui.toast('您输入了：' + this.email);
      }
      this.hide9();
    }
  }
};
</script>

<style>
.container {
  box-sizing: border-box;
}

.header {
  padding: 80rpx 90rpx 60rpx 90rpx;
  box-sizing: border-box;
}

.title {
  font-size: 34rpx;
  color: #333;
  font-weight: 500;
}

.sub-title {
  font-size: 24rpx;
  color: #7a7a7a;
  padding-top: 18rpx;
}

.zui-btn-box {
  padding: 10rpx 40rpx;
  box-sizing: border-box;
}

.zui-modal-custom {
  text-align: center;
}

.zui-tips-img {
  width: 80rpx;
  height: 80rpx;
  margin-top: 20rpx;
}

.zui-modal-custom-text {
  font-size: 30rpx;
  color: #333;
  padding: 30rpx 0 50rpx;
}

.zui-prompt-title {
  padding-bottom: 20rpx;
  font-size: 34rpx;
}

.zui-input__box {
  width: 80%;
  height: 82rpx;
  margin: 30rpx auto 50rpx;
}

.zui-modal-input {

  border-bottom: 1rpx solid #e6e6e6;
  height: 80rpx;
  font-size: 28rpx;
  text-align: center;
}

.zui-hidden-input {
  /* #ifdef MP-WEIXIN */
  width: 0;
  /* #endif */
}
</style>
