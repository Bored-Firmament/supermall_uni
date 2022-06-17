<template>
  <view class="category-menu">
    <view
      class="category-menu-item"
      :class="{'select-item': currentIndex === index}"
      v-for="(item, index) in category"
      :key="item.maitKey"
      @click="clickItem(index)">
      <text>{{item.title}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "CategoryMenu",
    props: {
      category: {
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
        this.$emit('clickItem', this.category[this.currentIndex]);
      }
    }
  }
</script>

<style lang="scss">
  .category-menu-item{
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
  }

  .select-item{
    font-weight: bold;
    color: #FF8198;
    border-left: 8rpx solid #FF8198;
  }
</style>
