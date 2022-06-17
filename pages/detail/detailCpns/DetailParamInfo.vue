<template>
  <view class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <view v-for="(table,tIndex) in paramInfo.sizes" class="table info-sizes" :key="tIndex">
      <view v-for="(sizes,sIndex) in table" class="tr" :key="sIndex">
        <view v-for="(size,index) in sizes" class="td" :key="index">{{size}}</view>
      </view>
    </view>

    <view class="table info-infos">
      <view v-for="info in paramInfo.infos" class="tr">
        <view class="td">{{info.key}}</view>
        <view class="td param-value">{{info.value}}</view>
      </view>
    </view>

    <view class="info-imgs" v-if="paramInfo.image">
      <image :src="paramInfo.image" alt=""></image>
    </view>
  </view>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss">
  .detail-param-info{
    font-size: 26rpx;
    color: #666;
    
    padding: 20rpx;
    border-bottom: 6rpx solid #f2f5f8;
    
    .table {
      
      .tr {
        width: 100%;
        line-height: 80rpx;
        border-bottom: 2rpx solid #f2f5f8;
        display: flex;
        
        .td{
          flex: 1;
        }
        .td:first-child{
          width: 130rpx;
          flex: none;
        }
      }
    }
    .info-infos{
      border-top: 6rpx solid #f2f5f8;
      
      .param-value{
        color: #FF8198;
      }
    }
    .info-imgs image{
      width: 100%;
    }
  }
</style>
