<template>
  <view class="user-special-info">
    <view class="special-info-item">
      <view>
        <text>0.00</text>元
      </view>
      <view>我的余额</view>
    </view>
    <view class="special-info-item">
      <view>
        <text>0</text>个
      </view>
      <view>我的优惠</view>
    </view>
    <view class="special-info-item last">
      <view>
        <text>0</text>分
      </view>
      <view>我的积分</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "UserSpecialInfo"
}
</script>

<style lang="scss">
  .user-special-info {
    display: flex;
    font-size: 28rpx;
    
    .special-info-item {
      flex: 1;
      text-align: center;
    
      padding: 40rpx;
      background-color: #fff;
    }
    .special-info-item:nth-child(2) {
      margin: 0 2rpx;
      border-left: 1rpx solid #eee;
      border-right: 1rpx solid #eee;
    }
    
    text {
      font-size: 44rpx;
      font-weight: 700;
      color: #ff5f3e;
    }
  }
</style>
