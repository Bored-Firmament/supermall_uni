<template>
  <view class="cart-list-item">
    <view class="product-check-box">
      <check-button @click.native="clickCheck(product.iid)" :is-check="product.checked"></check-button>
    </view>
    <view class="product-img">
      <image :src="product.image" mode="widthFix"></image>
    </view>
    <view class="product-message">
      <view class="product-title">{{product.title}}</view>
      <view class="product-desc">{{product.desc}}</view>
      <view class="product-bottom">
        <view class="product-price">¥{{product.price}}</view>
        <view class="product-count">x{{product.count}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton.vue";

  import { CHANGE_CHECK } from "@/store/mutation_types.js";

  export default {
    name: "CartListItem",
    components: {CheckButton},
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      clickCheck(iid){
        this.$store.commit(CHANGE_CHECK, iid);
      }
    }
  }
</script>

<style lang="scss">
  .cart-list-item{
    display: flex;
  
    padding: 5px;
    border-bottom: 1px solid #ddd;
    
    .product-check-box{
      width: 40px;
    
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .product-img{
      padding: 5px;
      
      image{
        width: 70px;
        border-radius: 5px;
        vertical-align: top;
      }
    }
    .product-message{
      flex: 1;
      padding: 5px 10px;
      overflow: hidden;
    
      position: relative;
      
      .product-title,.product-desc{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      
        width: 100%;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
      }
      .product-title{
        color: #000;
      }
      .product-desc{
        color: var(--color-text);
      }
      .product-bottom{
        position: absolute;
        bottom: 0;
        left: 10px;
        right: 10px;
      
        margin-bottom: 10px;
        
        .product-price{
          float: left;
          font-size: 12px;
          color: var(--color-high-text);
        }
        .product-count{
          float: right;
          font-size: 12px;
        }
      }
    }
  }
</style>
