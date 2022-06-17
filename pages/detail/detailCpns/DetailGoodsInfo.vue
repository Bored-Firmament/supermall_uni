<template>
  <view class="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <view class="info-desc" v-if="goodsInfo.desc !== ''">
      <view class="start"></view>
      <view class="desc">{{goodsInfo.desc}}</view>
      <view class="end"></view>
    </view>
    <view class="info-item" v-for="(itemInfo,itemIndex) in goodsInfo.detailImage" @click="previewImage">
      <view class="info-key">{{itemInfo.key}}</view>
      <view class="info-list">
        <image :src="item" v-for="(item,index) in itemInfo.list" mode="widthFix" :data-index1="itemIndex" :data-index2="index"></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      previewImage(e) {
        uni.previewImage({
          indicator: "default",
          current: e.target.dataset.index2,
          urls: this.goodsInfo.detailImage[e.target.dataset.index1].list
        })
      }
    }
  }
</script>

<style lang="scss">
  .detail-goods-info{
    font-size: 24rpx;
    color: #666;
    
    padding: 10px 0;
    border-bottom: 3px solid #f2f5f8;
    
    .info-desc{
      padding: 0 10px;
      
      .start,.end{
        border-top: 1px solid #000;
        width: 100px;
        position: relative;
      }
      .start::after,.end::after{
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        background-color: #000;
      
        position: absolute;
        bottom: 0;
      }
      .start{
        float: left;
      }
      .desc{
        padding: 15px 0px;
        font-size: 12px;
      }
      .end{
        float: right;
      }
      .end::after{
        right: 0;
      }
    }
    .info-item{
      .info-key{
        padding: 5px 10px;
      }
      
      .info-list{
        image{
          width: 750rpx;
        }
      }
    }
  }

  

  
</style>
