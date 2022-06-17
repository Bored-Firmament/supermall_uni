<template>
  <view class="detail-base-info" v-if="Object.keys(baseInfo).length !== 0">
    <view class="info-title">{{baseInfo.title}}</view>
    <view class="info-price">
      <text class="n-price">{{baseInfo.newPrice}}</text>
      <text class="o-price">{{baseInfo.oldPrice}}</text>
      <text
        class="discount"
        v-if="baseInfo.discount"
        :style="{'background-color':baseInfo.discountBG}">{{baseInfo.discount}}</text>
    </view>
    <view class="info-other">
      <text>{{baseInfo.columns[0]}}</text>
      <text>{{baseInfo.columns[1]}}</text>
      <text>{{baseInfo.services[baseInfo.services.length-1].name}}</text>
    </view>
    <view class="info-service">
      <!-- v-for="index in (Number)" 中index将是从1-Number的数~ -->
      <!-- uniapp使用时注意: 一个参数时(index) 在 H5 中是 从1开始,在 其他平台 是 从0开始；所以用(item,index) -->
      <view class="info-service-item" v-for="(item, index) in baseInfo.services.length-1" :key="index">
        <image :src="baseInfo.services[index].icon"/>
        <text>{{baseInfo.services[index].name}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      baseInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss">
  .detail-base-info{
    font-size: 24rpx;
    color: #666;
    
    padding: 30rpx 20rpx;
    border-bottom: 6rpx solid #f2f5f8;
    
    .info-title{
      color: #333;
      font-size: 28rpx;
      line-height: 40rpx;
    }
    .info-price{
      display: flex;
      align-items: flex-end;
      margin: 20rpx 0;
      
      .n-price{
        margin-right: 10rpx;
        font-size: 40rpx;
        color: #FF8198;
      }
      .o-price{
        margin-right: 10rpx;
        font-size: 24rpx;
        text-decoration: line-through;
        color: #999999;
      }
      .discount{
        border-radius: 10rpx;
        padding: 4rpx 10rpx;
        color: #fff;
        height: 30rpx;
      
        position: relative;
        bottom: 10rpx;
      }
    }
    .info-other{
      display: flex;
      justify-content: space-between;
      color: #999999;
      padding: 10rpx 0;
      border-bottom: 2rpx solid #f2f5f8;
    }
    .info-service{
      display: flex;
      justify-content: space-between;
      padding: 40rpx 0 0;
      
      image{
        width: 20rpx;
        height: 20rpx;
      }
    }
  }
</style>
