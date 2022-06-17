<template>
  <view class="cart-bottom-bar">
    <view class="check-box">
      <check-button :is-check="isAllCheck" @click.native="clickAllCheck()"></check-button>
      <text class="all-check-text">全选</text>
    </view>
    <view class="totalPrice">
      <text>合计: {{priceDecoration(checkedProductPriceTotal)}}</text>
    </view>
    <view class="settlement" @click="goCommit">
      <text>去结算({{checkedProductCountTotal}})</text>
    </view>
  </view>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton.vue";
  import { mapGetters } from "vuex";

  import { CHANGE_ALL_CHECK } from "@/store/mutation_types.js";

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      checkedProductPriceTotal(){
        return this.$store.getters.cartList
          .filter(item => item.checked)
          .reduce((result,item) => result + item.price*item.count, 0)
          .toFixed(2)
      },
      checkedProductCountTotal(){
        return this.cartList.filter(item => item.checked).length
      },
      isAllCheck(){
        return this.cartList.every(item => item.checked)
      }
    },
    methods: {
      priceDecoration(price) {
        return "￥" + price
      },
      clickAllCheck() {
        let currentAllCheck = this.isAllCheck;
        this.$store.commit(CHANGE_ALL_CHECK, currentAllCheck);
      },
      goCommit() {uni.showToast({
          title: '暂无该功能',
          icon: 'error'
        })
      }
    }
  }
</script>

<style lang="scss">
  .cart-bottom-bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    height: 60rpx;
    background-color: #ededed;

    display: flex;
    
    text{
      font-size: 24rpx;
    }
    .check-box{
      width: 70px;
    
      display: flex;
      justify-content: center;
      align-items: center;
      
      .all-check-text {
        margin-left: 10rpx;
      }
    }
    .totalPrice{
      flex: 1;
    
      display: flex;
      align-items: center;
    }
    .settlement{
      width: 200rpx;
      background-color: #FF8198;
      color: #fff;
    
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
