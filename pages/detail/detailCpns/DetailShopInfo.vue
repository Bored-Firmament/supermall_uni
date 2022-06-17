<template>
  <view class="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <view class="shop-logo">
      <image :src="shopInfo.logo" :alt="shopInfo.name" :title="shopInfo.name"></image>
      <text>{{shopInfo.name}}</text>
    </view>
    <view class="shop-message">
      <view class="shop-m-left">
        <view class="info-sells">
          <text class="info-value">{{sellCouontFilter(shopInfo.sells)}}</text>
          <text>总销量</text>
        </view>
        <view class="info-count">
          <text class="info-value">{{shopInfo.goodsCount}}</text>
          <text>全部宝贝</text>
        </view>
      </view>
      <view class="shop-m-right">
        <view class="s-m-r-item" v-for="(item, index) in shopInfo.score" :key="index">
          <view>{{item.name}}</view>
          <view class="score" :class="{'score-better':item.isBetter}">{{item.score}}</view>
          <view class="score-text" :class="{'score-text-better':item.isBetter}">
            <text>{{item.isBetter ? '高' : '低'}}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="shop-button">
      <text class="enter-shop">进店逛逛</text>
    </view>
  </view>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    sellCouontFilter(sells) {
      let finishSells = 0;
      if(sells >= 10000) {
        finishSells = (sells / 10000).toFixed(1) + '万';
      }
      return finishSells;
    }
  }
}
</script>

<style lang="scss">
  .detail-shop-info{
    font-size: 24rpx;
    color: #666;
      
    padding: 40rpx 20rpx;
    border-bottom: 6rpx solid #f2f5f8;
    
    .shop-logo{
      display: flex;
      
      image{
        width: 80rpx;
        height: 80rpx;
        margin-right: 20rpx;
      }
      text{
        line-height: 80rpx;
      }
    }
    .shop-message{
      display: flex;
      text-align: center;
      margin: 20rpx 0;
      line-height: 40rpx;
      
      .shop-m-left{
        flex: 1;
        display: flex;
        margin: 32rpx 0;
        border-right: 2rpx solid #f2f5f8;
        
        .info-sells,.info-count{
          flex: 1;
          display: flex;
          flex-direction: column;
          
          .info-value{
            font-size: 32rpx;
          }
        }
      }
      .shop-m-right{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .s-m-r-item{
          margin-left: 40rpx;
          display: flex;
          
          view{
            text-align: left;
            font-size: 24rpx;
            padding-right: 20rpx;
          }
          .score{
            color: #5ea732;
            width: 60rpx;
          }
          .score-text text{
            background-color: #5ea732;
            color: #fff;
          }
          .score-better{
            color: #f13e3a;
          }
          .score-text-better text{
            background-color: #f13e3a;
          }
        }
      }
    }
    .shop-button{
      text-align: center;
      
      .enter-shop{
        display: block;
        background-color: #f2f5f8;
        width: 240rpx;
        height: 50rpx;
        line-height: 50rpx;
        border-radius: 20rpx;
        margin: auto;
      }
    }
  }

  
  

  
  

</style>
