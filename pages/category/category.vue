<template>
  <view class="content" id="category">
    <view class="category-left">
      <scroll-view scroll-y>
        <category-menu :category="category" @clickItem="clickTheme"></category-menu>
      </scroll-view>
    </view>
    <view class="category-right">
      <scroll-view 
        scroll-y  
        scroll-with-animation="true" 
        :scroll-top="scrollTop" 
        :lower-threshold="0" 
        @scroll="scroll"
        @scrolltolower="scrollReachBottom"
      >
        <category-sub-menu :sub-category="subCategory" @clickItem="clickSubTheme"></category-sub-menu>
        <tab-control :list="['流行','新款','精选']" ref="tabControl" @clickTabItem="clickTabItem"></tab-control>
        <goods-list :goods="showGoods" ref="goods" id="category-goods-list"></goods-list>
      </scroll-view>
      <back-top v-show="isShowBackTop" @backTop="backTop"></back-top>
    </view>
	</view>
</template>

<script>
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";

  import CategoryMenu from "@/pages/category/categoryCpns/CategoryMenu";
  import CategorySubMenu from "@/pages/category/categoryCpns/CategorySubMenu";
  
  import BackTop from "@/components/content/backTop/BackTop.vue"
  import { backTopOperationMixin } from "@/common/mixin.js"
  
  import { getCategory,getSubcategory,getCategoryDetail } from "@/services/category_api.js"
	export default {
    mixins: [backTopOperationMixin],
    components: {
      TabControl,
      GoodsList,
      CategoryMenu,
      CategorySubMenu,
      BackTop
    },
		data() {
			return {
				category: [],
        subCategory: [],
        miniWallkey: null,
        currentType: 'pop',
        goods: {  // 事实上,下面的page属性可以删除,因为接口目前不提供更多数据
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
			}
		},
    onLoad() {
      this.getCategory();
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      },
      getGoodsTabY() {
        return this.goods[this.currentType].scrollY;
      }
    },
		methods: {
			clickTheme(event) {
        this.getSubAndList(event);
      },
      clickSubTheme(event) {
        uni.showToast({
          icon: "error",
          title: "不支持该操作"
        })
      },
      clickTabItem(event){
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
      // 获取屏幕右边信息(二级列表,商品列表)
      getSubAndList(event) {
        this.backTop();
        this.currentType = 'pop';
        this.$refs.tabControl.currentIndex = 0;
        this.miniWallkey = event.miniWallkey;
        this.maitKey = event.maitKey;
        this.getSubcategory(event.maitKey);
        this.getCategoryDetail(event.miniWallkey, 'pop');
        this.getCategoryDetail(event.miniWallkey, 'new');
        this.getCategoryDetail(event.miniWallkey, 'sell');
      },
      scrollReachBottom(){
        uni.showToast({
          icon: "none",
          title: "没有更多数据了"
        })
      },
      /**
       * 网络请求相关
       * */
      getCategory() {
        getCategory().then(res => {
          // 保存 一级列表 数据
          this.category = res.data.category.list;
          // 记录 当前选中的 一级列表 的id
          this.miniWallkey = this.category[0].miniWallkey;
          // 记录 当前一级列表 的 二级列表 的id
          this.maitKey = this.category[0].maitKey;
          // 默认 展示
          // 调用 获取 二级列表 数据 的方法;
          this.getSubcategory(this.maitKey);
          // 调用 获取 商品列表 数据 的方法;
          this.getCategoryDetail(this.miniWallkey, 'pop');
          this.getCategoryDetail(this.miniWallkey, 'new');
          this.getCategoryDetail(this.miniWallkey, 'sell');
        }).catch(err => {
          console.log('请求商品分类页一级列表出错了-', err);
        })
      },
      getSubcategory(maitKey) {
        getSubcategory(maitKey).then(res => {
          this.subCategory = res.data.list;
        }).catch(err => {
          console.log('请求商品分类页二级列表出错了-', err);
        })
      },
      getCategoryDetail(miniWallkey, type) {
        getCategoryDetail(miniWallkey, type).then(res => {
          let selectType = Object.keys(this.goods).find(item => item === type);

          this.goods[selectType].page=0;
          this.goods[selectType].list=[];
          res.forEach(item => {
            this.goods[selectType].list.push(item);
          })
          ++this.goods[selectType].page;
        }).catch(err => {
          console.log('请求商品分类页商品列表出错了-', err);
        })
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
    display: flex;
    
    scroll-view {
      height: 100%;
      overflow: hidden;
    }
    .category-left {
      overflow: hidden;
      width: 200rpx;
      flex: none;
      background-color: #f6f6f6;
    }
    .category-right {
      overflow: hidden;
      flex: 1;
    }
  }
</style>
