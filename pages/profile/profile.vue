<template>
  <view class="content" id="profile">
    <!-- 档案页(个人页)-用户基础信息/(登录/注册) -->
    <user-info/>
    <!-- 档案页(个人页)-显示的特定信息 -->
    <user-special-info/>

    <!-- 档案页(个人页)-菜单列表1 -->
    <menu-list-view :menu-list="menuList1"/>
    <!-- 档案页(个人页)-菜单列表2 -->
    <menu-list-view :menu-list="menuList2"/>
	</view>
</template>

<script>
  import UserInfo from "@/pages/profile/profileCpns/UserInfo.vue";
  import UserSpecialInfo from "@/pages/profile/profileCpns/UserSpecialInfo.vue";
  import MenuListView from "@/pages/profile/profileCpns/MenuListView.vue";
  
	export default {
		components: {
      UserInfo,
      UserSpecialInfo,
      MenuListView
    },
    data() {
      return {
        menuList1: [
          {icon: 'notification', iconColor: '#555555', info: '我的消息', path: ''},
          {icon: 'shop', iconColor: '#555555', info: '积分商城', path: ''},
          {icon: 'vip', iconColor: '#555555', info: '会员卡', path: ''},
        ],
        menuList2: [
          {icon: 'location', iconColor: '#ff8198', info: '我的地址', path: 'location'},
          {icon: 'cart', iconColor: '#555555', info: '我的购物车', path: ''},
          {icon: 'download', iconColor: '#555555', info: '下载购物APP', path: ''},
        ]
      }
    }
	}
</script>

<style>
  .content {
    height: 100vh;
    /* #ifdef H5 */
    height: calc(100vh - 44px - 50px);
    /* #endif */
    overflow: hidden;
  }
</style>
