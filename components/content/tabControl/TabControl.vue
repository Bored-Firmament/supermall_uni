<template>
  <view class="tab-control">
    <view
      class="tab-control-item"
      :class="{'tab-control-active': currentIndex === index}"
      @click="clickTabItem(index)"
      v-for="(item, index) in list">
      <text>{{item}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      list: {
        type: Array,
        default() {
          return  []
        }
      }
    },
    methods: {
      clickTabItem(index) {
        this.currentIndex = index;
        this.$emit("clickTabItem",index);
      }
    }
  }
</script>

<style lang="scss">
  .tab-control{
    display: flex;
    text-align: center;
    height: 80rpx;
    line-height: 80rpx;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-active text{
    padding: 10rpx;
    border-bottom: 6rpx solid #FF8198;
  }
</style>
