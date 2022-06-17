<template>
  <view class="nav-bar">
    <view class="nav-bar-item">
      <slot name="left"></slot>
    </view>
    <view class="nav-bar-item">
      <slot name="center"></slot>
    </view>
    <view class="nav-bar-item">
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    width: 100%;
    line-height: 44px;
    height: 44px;
    background-color: #fff;
    color: #000;
    display: flex;

    box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
  }

  .nav-bar-item{
    width: 60px;
  }
  .nav-bar-item:nth-child(2){
    flex: 1;
    text-align: center;
    font-size: 18px;
  }
</style>
