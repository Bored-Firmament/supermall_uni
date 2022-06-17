<template>
  <view class="home-recommend">
    <block v-for="item in recommends" class="recommend-item">
      <view class="recommend-item">
        <image :src="item.image" :alt="item.title" :title="item.title"></image>
        <text>{{item.title}}</text>
      </view>
    </block>
  </view>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="scss">
  .home-recommend {
    display: flex;
    padding: 20rpx 0 40rpx;
    border-bottom: 20rpx solid #eeeeee;
    
    .recommend-item {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      image {
        width: 130rpx;
        height: 130rpx;
        vertical-align:top;
      }
    }
  }
</style>
