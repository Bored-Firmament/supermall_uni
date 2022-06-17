<template>
  <view class="cart-list">
    <cart-list-item v-for="item in cartList" :key="item.iid" :product="item"/>
  </view>
</template>

<script>
  import CartListItem from "@/pages/shopcart/shopcartCpns/CartListItem.vue";
  import { mapGetters } from "vuex";

  export default {
    name: "CartList",
    components: {CartListItem},
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style lang="scss">

</style>
