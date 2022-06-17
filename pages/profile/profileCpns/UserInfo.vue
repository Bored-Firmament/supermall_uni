<template>
  <view class="user-info">
    <view class="user-icon">
      <slot name="user-icon">
        <image src="@/static/img/portrait.png" alt="头像图标"></image>
      </slot>
    </view>

    <view class="login-info">
      <view class="login-or-name">
        <slot name="login-or-name">
          <text>登录/注册</text>
        </slot>
      </view>
      <view class="user-phone-box">
        <view>
          <image src="@/static/img/phone.png" alt="手机图标"></image>
        </view>
        <view class="user-phone">
          <slot name="user-phone">
            <text>暂无绑定手机号</text>
          </slot>
        </view>
      </view>
    </view>

    <view class="user-detail">
      <view>
        <slot name="user-detail">
          <text decode>&gt;</text>
        </slot>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style lang="scss">
  .user-info {
    box-sizing: border-box;
    width: 100%;
    height: 180rpx;

    background-color: #FF8198;
    color: #FFF;

    padding: 30rpx;

    display: flex;
    justify-content: space-between;
    
    /* 用户头像 */
    .user-icon {
      width: 120rpx;
      height: 120rpx;
    
      background-color: #fff;
      border-radius: 50%;
      overflow: hidden;
      
      image {
        width: 120rpx;
        height: 120rpx;
      }
    }
    /* 用户(注册/登录)/基本信息 */
    .login-info {
      flex: 1;
      padding: 20rpx;
      
      .login-or-name {
        font-size: 32rpx;
      }
      .user-phone-box {
        margin-top: 10rpx;
        font-weight: 100;
        font-size: 28rpx;
        height: 36rpx;
        line-height: 28rpx;
        
        view {
          display: inline-block;
        }
        image {
          width: 24rpx;
          height: 36rpx;
        
          vertical-align: top;
          margin-right: 10rpx;
        }
      }
    }
    /* 用户详情按钮 */
    .user-detail {
      width: 40rpx;
      height: 120rpx;
      line-height: 120rpx;
      text-align: center;
    
      font-family: "宋体";
      font-weight: 700;
      
      text {
        display: block;
        width: 40rpx;
      }
    }
  }
</style>
