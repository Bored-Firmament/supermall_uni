<template>
  <view class="content" id="home">
    <scroll-view 
      scroll-y="true" 
      scroll-with-animation="true" 
      :scroll-top="scrollTop" 
      :lower-threshold="200" 
      @scroll="scroll" 
      @scrolltolower="scrollReachBottom"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      
      <tab-control ref="homeTab" :list="['流行','新款','精选']" @clickTabItem="clickTabItem"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll-view>
    <back-top v-show="isShowBackTop" @backTop="backTop"></back-top>
  </view>
</template>

<script>
  import TabControl from "@/components/content/tabControl/TabControl.vue"
  import GoodsList from "@/components/content/goods/GoodsList.vue"
  
  import HomeSwiper from "./homeCpns/HomeSwiper.vue"
  import HomeRecommend from "./homeCpns/HomeRecommend.vue"
  
  import BackTop from "@/components/content/backTop/BackTop.vue"
  import { backTopOperationMixin } from "@/common/mixin.js"

  import {
    getHomeMultidata,
    getHomeGoods
  } from "@/services/home_api.js"

  export default {
    mixins: [backTopOperationMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: { page: 0, list: [] },
          new: { page: 0, list: [] },
          sell: { page: 0, list: [] }
        },
        currentType: 'pop'
      }
    },
    components: {
      HomeSwiper,
      HomeRecommend,
      TabControl,
      GoodsList,
      BackTop
    },
    onLoad() {
      // #ifdef H5 
      uni.startPullDownRefresh();
      // #endif
      // #ifndef H5
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      // #endif
    },
    // #ifdef H5 
    onPullDownRefresh() {
      // 初始化
      this.banners = [];
      this.recommends = [];
      this.goods = {
          pop: { page: 0, list: [] },
          new: { page: 0, list: [] },
          sell: { page: 0, list: [] }
        }
      this.currentType = 'pop';
      
      this.$refs.homeTab.currentIndex = 0;
      // 发送请求
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      
      uni.stopPullDownRefresh();
    },
    // #endif
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    methods: {
      /**
       * 网络请求相关
       * */
      getHomeMultidata() {
        getHomeMultidata()
          .then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page)
          .then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1;
          })
      },

      /**
       * 事件监听
       * */
      clickTabItem(event) {
        switch (event){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      scrollReachBottom() {
        this.getHomeGoods(this.currentType);
      }
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
