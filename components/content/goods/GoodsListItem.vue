<template>
  <view class="goods-item" @click="clickGoodsItem">
    <image :src="showImage" :key="goodsItem.iid" mode="widthFix"></image>
    <view class="goods-item-text">
      <view class="goods-item-title">{{goodsItem.title}}</view>
      <view class="goods-item-param">
        <view class="goods-item-price">￥{{goodsItem.price}}</view>
        <view class="goods-item-favorite">
          <uni-icons type="star" size="15"></uni-icons>
          {{goodsItem.cfav}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    clickGoodsItem() {
      if(this.goodsItem.iid) {
        uni.navigateTo({
          url: "/pages/detail/detail?iid=" + this.goodsItem.iid
        })
      } else {
        uni.showToast({
          icon: "error",
          title: "功能未开发"
        })
      }
    }
  },
  computed:{
    showImage() {
      return (this.goodsItem.show && this.goodsItem.show.img) || this.goodsItem.image || this.goodsItem.img;
    }
  }
}
</script>

<style lang="scss">
  .goods-item{
    overflow: hidden;
    width: 100%;
    
    image {
      width: 100%;
      border-radius: 10rpx;
    }
    .goods-item-text{
      text-align: center;
      overflow: hidden;
      font-size: 24rpx;
      
      .goods-item-title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .goods-item-param {
        display: flex;
        justify-content: center;
        
        .goods-item-price{
          color: #FF5777;
        }
        .goods-item-favorite{
          padding-left: 40rpx;
        }
      }
    }
  }
</style>
