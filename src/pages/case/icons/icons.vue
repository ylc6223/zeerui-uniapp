<template>
  <view class="container">
    <view class="grid grid-cols-3">
      <view class="icon-item box-border py-4 flex flex-col items-center justify-center" v-for="item in iconList" :key="item.name">
        <zui-icon :name="item.name" :size="item.size" :color="item.color || '#999'"></zui-icon>
        <text class="text-base">{{item.name}}</text>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      iconList: [
        {
          "name": "view",
          "size": 30
        },
        {
          "name": "view_off",
          "size": 30
        },
        {
          "name": "message",
          "size": 30
        },
        {
          "name": "message_unread",
          "size": 30
        },
        {
          "name": "record",
          "size": 30
        },
        {
          "name": "time",
          "size": 30
        },
        {
          "name": "credits",
          "size": 30
        },
        {
          "name": "renew",
          "size": 30
        },
        {
          "name": "order",
          "size": 30
        },
        {
          "name": "order_unread",
          "size": 30
        },
        {
          "name": "cart_empty",
          "size": 30
        },
        {
          "name": "cart",
          "size": 30
        },
        {
          "name": "search",
          "size": 30
        },
        {
          "name": "edit",
          "size": 30
        },
        {
          "name": "link",
          "size": 30
        },
        {
          "name": "share",
          "size": 30
        },
        {
          "name": "setting",
          "size": 30
        },
        {
          "name": "upload",
          "size": 30
        },
        {
          "name": "download",
          "size": 30
        },
        {
          "name": "play",
          "size": 30
        },
        {
          "name": "region",
          "size": 30
        },
        {
          "name": "discount",
          "size": 30
        },
        {
          "name": "notification",
          "size": 30
        },
        {
          "name": "notification_off",
          "size": 30
        },
        {
          "name": "phonecall",
          "size": 30
        },
        {
          "name": "phonecall_off",
          "size": 30
        },
        {
          "name": "lock",
          "size": 30
        },
        {
          "name": "unlock",
          "size": 30
        },
        {
          "name": "ET",
          "size": 30
        },
        {
          "name": "flow",
          "size": 30
        },
        {
          "name": "filter",
          "size": 30
        },
        {
          "name": "calculator",
          "size": 30
        },
        {
          "name": "image",
          "size": 30
        },
        {
          "name": "email",
          "size": 30
        },
        {
          "name": "copy",
          "size": 30
        },
        {
          "name": "user",
          "size": 30
        },
        {
          "name": "service",
          "size": 30
        },
        {
          "name": "sub_account",
          "size": 30
        },
        {
          "name": "view-copy",
          "size": 30
        },
        {
          "name": "partner",
          "size": 30
        },
        {
          "name": "list",
          "size": 30
        },
        {
          "name": "international",
          "size": 30
        },
        {
          "name": "refresh",
          "size": 30
        },
        {
          "name": "close_filled",
          "size": 30
        },
        {
          "name": "check",
          "size": 30
        },
        {
          "name": "close",
          "size": 30
        },
        {
          "name": "check_filled",
          "size": 30
        },
        {
          "name": "forbidden",
          "size": 30
        },
        {
          "name": "forbidden_filled",
          "size": 30
        },
        {
          "name": "info_filled",
          "size": 30
        },
        {
          "name": "info",
          "size": 30
        },
        {
          "name": "help_filled",
          "size": 30
        },
        {
          "name": "help",
          "size": 30
        },
        {
          "name": "caution",
          "size": 30
        },
        {
          "name": "caution_filled",
          "size": 30
        },
        {
          "name": "like",
          "size": 30
        },
        {
          "name": "like_filled",
          "size": 30
        },
        {
          "name": "star",
          "size": 30
        },
        {
          "name": "star_filled",
          "size": 30
        },
        {
          "name": "arrow_up",
          "size": 30
        },
        {
          "name": "arrow_left",
          "size": 30
        },
        {
          "name": "arrow_down",
          "size": 30
        },
        {
          "name": "arrow_right",
          "size": 30
        },
        {
          "name": "first",
          "size": 30
        },
        {
          "name": "down_to_bottom",
          "size": 30
        },
        {
          "name": "up_to_top",
          "size": 30
        },
        {
          "name": "last",
          "size": 30
        },
        {
          "name": "turn_left",
          "size": 30
        },
        {
          "name": "turn_right",
          "size": 30
        },
        {
          "name": "show_less",
          "size": 30
        },
        {
          "name": "show_more",
          "size": 30
        },
        {
          "name": "sina",
          "size": 30
        },
        {
          "name": "google",
          "size": 30
        },
        {
          "name": "youtube",
          "size": 30
        },
        {
          "name": "github",
          "size": 30
        },
        {
          "name": "x",
          "size": 30
        },
        {
          "name": "applets",
          "size": 30
        },
        {
          "name": "wechat",
          "size": 30
        },
        {
          "name": "server_fault",
          "size": 30
        },
        {
          "name": "balance",
          "size": 30
        },
        {
          "name": "go-to-link",
          "size": 30
        },
        {
          "name": "benefits",
          "size": 30
        },
        {
          "name": "alipay",
          "size": 30
        },
        {
          "name": "taobao",
          "size": 30
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
//.icon-item:nth-child(3n-1),.icon-item:nth-child(3n){
//  border: 1px solid #999;
//}
//.icon-item:nth-child(3n-1){
//  border-left: 1px solid #999;
//  border-right: 1px solid #999;
//}
.icon-item{
    border: 1px solid #999;
}
</style>
