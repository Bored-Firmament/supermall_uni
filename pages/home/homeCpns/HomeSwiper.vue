<template>
  <view class="home-swiper">
    <swiper indicator-dots autoplay circular interval="3000">
      <block v-for="(item, index) in banners" :key="index">
        <swiper-item>
          <image :src="item.image" :alt="item.title" :title="item.title"></image>
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style lang="scss">
  .home-swiper {
    swiper {
      width: 100%;
      height: 390rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
