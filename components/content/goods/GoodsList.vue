<template>
  <view class="goods-list">
    <view class="goos-item" v-for="(item, index) in goods">
      <goods-list-item
        :goods-item="item"
        :key="(item.iid || item.item_id) + index"
      ></goods-list-item>
    </view>
  </view>
</template>

<script>
  import GoodsListItem from "@/components/content/goods/GoodsListItem";
  export default {
    name: "GoodsList",
    components: {GoodsListItem},
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      getId(item, index) {
        return (item.iid || item.item_id) + index;
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
  }
  .goos-item {
    width: 47%;
    margin-left: 2%;
  }
</style>
