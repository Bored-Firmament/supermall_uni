<template>
  <view class="content" id="shopcart">
    <scroll-view scroll-y>
      <cart-list></cart-list>
    </scroll-view>
    
    <cart-bottom-bar></cart-bottom-bar>
	</view>
</template>

<script>
  import CartList from "@/pages/shopcart/shopcartCpns/CartList.vue";
  import CartBottomBar from "@/pages/shopcart/shopcartCpns/CartBottomBar.vue";

	export default {
    components: {
      CartList,
      CartBottomBar
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
  }
  scroll-view {
    height: 100%;
    overflow: hidden;
  }
</style>
