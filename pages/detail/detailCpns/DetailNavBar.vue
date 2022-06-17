<template>
  <nav-bar class="detail-nav-bar">
    <template v-slot:left>
      <view class="back" @click="clickBack">
        <uni-icons type="back" size="30"></uni-icons>
      </view>
    </template>
    <template v-slot:center>
      <view class="title">
        <view
          class="title-item"
          v-for="(item,index) in titles"
          @click="itemClick(index)"
          :class="{active: currentIndex === index}">
          {{item}}
        </view>
      </view>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      clickBack() {
        if(getCurrentPages().length === 1) {
          uni.switchTab({
            url: '/pages/home/home'
          })
        } else {
          uni.navigateBack()
        }
      },
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('clickItem', index);
      }
    }
  }
</script>

<style scoped>
  .detail-nav-bar{
    color: #666;
  }

  .back{
    text-align: center;
  }
  .back img{
    margin-top: 8px;
    width: 25px;
  }

  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 13px;
  }
  .active{
    color: #FF8198;
  }
</style>
