<template>
  <view class="detail-bottom-bar">
    <uni-goods-nav class="detail-uni-goods-nav" :fill="true" :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
  </view>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data(){
      return {
        options: [
          {
            icon: 'headphones',
            text: '客服'
          },{
            icon: 'shop',
            text: '店铺',
          },{
            icon: 'cart',
            text: '购物车',
            infoBackgroundColor:'red',
            info: 0
          }
        ],
        buttonGroup: [
          {
            text: '加入购物车',
            backgroundColor: '#ffa200',
            color: '#fff'
          },{
            text: '立即购买',
            backgroundColor: '#ff5777',
            color: '#fff'
          }
        ]
      }
    },
    created() {
      this.options[2].info = this.$store.getters.cartLength;
    },
    methods: {
      onClick(e) {
        switch(e.index){
          case 0:
          case 1:
            uni.showToast({
              title: '暂无该功能',
              icon: 'none'
            })
            break;
          case 2:
            uni.switchTab({
              url: '/pages/shopcart/shopcart'
            })
            break;
        }
      },
      buttonClick(e) {
        switch(e.index){
          case 0:
            this.$emit('addGoods');
            break;
          case 1:
            uni.showToast({
              title: '暂无该功能',
              icon: 'none'
            })
            break;
        }
      },
    }
  }
</script>

<style lang="scss">
  .detail-bottom-bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    height: 49px;
    box-shadow: 0 -1px 1px rgba(0,0,0,0.05);

    display: flex;
    
    .detail-uni-goods-nav {
      width: 100%;
    }
  }
</style>
