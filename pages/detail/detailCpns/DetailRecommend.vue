<template>
  <view class="detail-recommend">
    <view class="info-header">热门推荐</view>
    <goods-list :goods="recommends"></goods-list>
  </view>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";

  export default {
    name: "DetailRecommend",
    components: {
      GoodsList
    },
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss">
  .info-header{
    padding: 0 20rpx;
    height: 100rpx;
    line-height: 100rpx;
    border-bottom: 2rpx solid #f2f5f8;
    margin-bottom: 20rpx;
  }
</style>
