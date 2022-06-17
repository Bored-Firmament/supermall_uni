<template>
  <view class="category-sub-menu">
    <view
      class="sub-menu-item"
      :class="{'select-item': currentIndex === index}"
      v-for="(item, index) in subCategory"
      :key="item.link"
      :data-href="item.link"
      @click="clickItem(index)"
    >
      <image :src="item.image" alt="title"></image>
      <text>{{item.title}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "CategorySubMenu",
    props: {
      subCategory: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      clickItem(index) {
        this.currentIndex = index;
        this.$emit('clickItem', this.subCategory[this.currentIndex]);
      }
    }
  }
</script>

<style lang="scss">
  .category-sub-menu{
    display: flex;
    flex-wrap: wrap;
    
    .sub-menu-item{
      box-sizing: border-box;
      width: 33%;
      margin: 16rpx 0;
    
      display: flex;
      flex-direction: column;
      text-align: center;
      
      image{
        width: 140rpx;
        height: 140rpx;
        margin: auto;
      }
      text{
        margin-top: 10rpx;
      }
    }
    .sub-menu-item:nth-child(3n+1),
    .sub-menu-item:nth-child(3n+2) {
      margin-right: 0.5%;
    }
    
    .select-item{
      border:1rpx solid #ccc;
      border-radius: 10rpx;
      box-shadow: 0 0 1rpx #000;
    }
  }
</style>
