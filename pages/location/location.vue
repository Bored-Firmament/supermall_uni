<template>
  <view class="content" id="location">
    <map :latitude="latitude" :longitude="longitude" :markers="covers"></map>
    <button class="locate-button" @click="getLocation">定位收货地址</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'map',
        latitude: 39.909,
        longitude: 116.39742,
        // latitude: 23.12908,
        // longitude: 113.26436, 
        covers: [{
          id: 0,
          latitude: 39.909,
          longitude: 116.39742,
          // latitude: 23.12908,
          // longitude: 113.26436, 
          iconPath: '/static/img/location.png',
          width: 30,
          height: 30,
        }]
      };
    },
    onLoad() {
      // this.getLocation();
    },
    methods: {
      getLocation() {
        // #ifdef APP-PLUS
        uni.showToast({
          icon: "none",
          title: "未开发功能"
        })
        // #endif
        // #ifndef APP-PLUS
        uni.getLocation({
          type: 'gcj02',
          success: (res) => {
            this.latitude = res.latitude;
            this.longitude = res.longitude;
            this.covers[0].latitude = res.latitude;
            this.covers[0].longitude = res.longitude;
          }
        })
        // #endif
      }
    }
  }
</script>

<style lang="scss">
  .content {
    height: 100vh;
    /* #ifdef H5 */
    height: calc(100vh - 44px - 50px);
    /* #endif */
    overflow: hidden;
    
    map {
      width: 750rpx;
      height: 750rpx;
    }
    .locate-button {
      margin-top: 20rpx;
      width: 90%;
      background-color: #ff8198;
      color: #fff;
    }
  }
</style>
