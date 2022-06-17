<template>
  <view class="content" id="detail" :style="{'padding-top': statusHeight+'px'}">
    <detail-nav-bar ref="detailNavBar" @clickItem="clickItem"></detail-nav-bar>
    <scroll-view
      scroll-y="true"
      scroll-with-animation="true" 
      :scroll-top="scrollTop" 
      :lower-threshold="0" 
      @scroll="scroll" 
      @scrolltolower="scrollReachBottom"
    >
      <detail-swiper ref="detailSwiper" :banners="topImages" ></detail-swiper>
      <detail-base-info :base-info="goods"></detail-base-info>
      <detail-shop-info :shop-info="shop"></detail-shop-info>
      <detail-goods-info :goods-info="detailInfo"></detail-goods-info>
      <detail-param-info ref="detailParamInfo" :param-info="paramInfo"></detail-param-info>
      <detail-comment ref="detailComment" :comments="comments"></detail-comment>
      <detail-recommend ref="detailRecommend" :recommends="recommends"></detail-recommend>
    </scroll-view>
    <detail-bottom-bar ref="bottomBar" @addGoods="addGoods()"></detail-bottom-bar>
    
    <back-top class="detail-back-top" v-show="isShowBackTop" @backTop="backTop"></back-top>
  </view>
</template>

<script>
  import DetailNavBar from "@/pages/detail/detailCpns/DetailNavBar.vue"
  import DetailSwiper from "@/pages/detail/detailCpns/DetailSwiper.vue"
  import DetailBaseInfo from "@/pages/detail/detailCpns/DetailBaseInfo.vue"
  import DetailShopInfo from "@/pages/detail/detailCpns/DetailShopInfo.vue"
  import DetailGoodsInfo from "@/pages/detail/detailCpns/DetailGoodsInfo.vue"
  import DetailParamInfo from "@/pages/detail/detailCpns/DetailParamInfo.vue"
  import DetailComment from "@/pages/detail/detailCpns/DetailComment.vue"
  import DetailRecommend from "@/pages/detail/detailCpns/DetailRecommend.vue"
  import DetailBottomBar from "@/pages/detail/detailCpns/DetailBottomBar.vue"
  
  import BackTop from "@/components/content/backTop/BackTop.vue"
  import { backTopOperationMixin } from "@/common/mixin.js"
  
  import {
    getDetail,
    getDetailRecommend,
    Goods,
    Shop,
    GoodsParam
  } from "@/services/detail_api.js"
  
  
  export default {
    mixins: [backTopOperationMixin],
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailComment,
      DetailRecommend,
      DetailBottomBar,
      BackTop
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        comments: [],
        recommends: [],
        themeNames: ["detailSwiper","detailParamInfo","detailComment","detailRecommend"],
        currentIndex: 0
      }
    },
    onLoad(opt) {
      // 1.保存传入的iid
      this.iid = opt.iid;
      // 2.根据iid请求详情数据
      this.getDetail(opt.iid);
      // 3.获取推荐商品数据
      this.getDetailRecommend();
    },
    computed: {
      //状态栏高度
      statusHeight(){
        return uni.getSystemInfoSync().statusBarHeight || 10;    //如果没有获取到高度，那么指定10px；
      }
    },
    methods: {
      /**
       * 事件监听
       * */
      clickItem(index){
        // #ifndef H5
        uni.showToast({
          title: "不支持锚点",
          icon: "none"
        })
        // #endif
        // #ifdef H5
        this.scrollTop = this.$refs[this.themeNames[index]].$el.offsetTop;
        // #endif
      },
      scroll(event) {
        // #ifdef H5
        const CURRREN_TOP = event.detail.scrollTop;
        const LENGTH = this.themeNames.length;
        for (let i = 0; i < LENGTH ; i++) {
          if((this.currentIndex !== i) 
            && ((i < LENGTH - 1 && CURRREN_TOP >= this.$refs[this.themeNames[i]].$el.offsetTop && CURRREN_TOP < this.$refs[this.themeNames[i + 1]].$el.offsetTop) 
              || (i === LENGTH - 1 && CURRREN_TOP >= this.$refs[this.themeNames[i]].$el.offsetTop))) {
            this.currentIndex = i;
            this.$refs.detailNavBar.currentIndex = this.currentIndex;
          }
        }
        // #endif
        // 小程序和app暂时不支持
      },
      scrollReachBottom(){
        uni.showToast({
          title: "没有更多数据了",
          icon: "none"
        })
      },
      addGoods(){
        // 后台提供的接口无法更好的完成,只能这样了;
        let product = {};
        product.iid = this.iid;
        product.title = this.goods.title;
        product.image = this.topImages[0];
        product.price = this.goods.realPrice;
        product.desc = this.detailInfo.desc;
        this.$store.dispatch('addGoods',product).then(res => {
          uni.showToast({
            title: res,
            icon: "none"
          })
          this.$refs.bottomBar.options[2].info = this.$store.getters.cartLength;
          ;
        });
      },
      /**
       * 网络请求相关
       * */
      getDetail(iid) {
        getDetail(iid)
          .then(res => {
            const data = res.result;
            // 2.1 获取顶部的图片轮播数据
            this.topImages = data.itemInfo.topImages;
            // 2.2 获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
            // 2.3 获取店铺信息
            this.shop = new Shop(data.shopInfo);
            // 2.4 获取商品详情
            this.detailInfo = data.detailInfo;
            // 2.5 获取参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
            // 2.6 获取评论信息
            if (data.rate.list) {
              this.comments = data.rate.list;
            }
          }).catch(err => {
            console.log('请求商品详情资源出错啦！', err);
          })
      },
      getDetailRecommend() {
        getDetailRecommend()
          .then(res => {
            this.recommends = res.data.list;
          }).catch(err => {
            console.log('请求推荐商品资源出错啦！', err);
          })
      }
    }
  }
</script>

<style lang="scss">
  .content {
    box-sizing: border-box;
    height: 100vh;
    overflow: hidden;
    
    scroll-view {
      height: calc(100% - 44px - 50px);
      overflow: hidden;
    }
  }
</style>
