<template>
  <view class="detail-swiper">
    <swiper indicator-dots indicator-active-color="#FF8198" autoplay circular interval="5000" @click="previewImage">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <image :src="item" mode="aspectFill" :data-index="index">
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    name: "DetailSwiper",
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      previewImage(e) {
        uni.previewImage({
          indicator: "default",
          current: e.target.dataset.index,
          urls: this.banners
        })
      }
    }
  }
</script>

<style lang="scss">
  .detail-swiper{
    swiper {
      width: 750rpx;
      height: 750rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
