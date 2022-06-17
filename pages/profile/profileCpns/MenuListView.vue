<template>
  <view class="menu-list-view">
    <view v-for="item in menuList" class="menu-item" @click="goPage(item.path)">
      <view class="icon">
        <uni-icons class="icons" :type="item.icon" :color="item.iconColor" size="30"></uni-icons>
      </view>
      <view class="info">{{item.info}}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "MenuListView",
  props: {
    menuList: {
      type: Array,
      default: []
    }
  },
  methods: {
    goPage(path) {
      if(!path) {
        uni.showToast({
          title: "暂无功能",
          icon: "error"
        })
      }else if(path === "location"){
        uni.navigateTo({
          url: "/pages/location/location"
        })
      }
    }
  }
}
</script>

<style lang="scss">
  .menu-list-view {
    border-top: 20rpx solid #eee;
    
    .menu-item {
      border-bottom: 2rpx solid #f2f2f2;
      display: flex;
      height: 40rpx;
      line-height: 40rpx;
      padding: 20rpx;
      
      .icons {
        margin-right: 10rpx;
      }
    }
    .menu-item:last-child {
      border-bottom: none;
    }
  }
</style>
