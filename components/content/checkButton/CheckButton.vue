<template>
  <view class="check-button" :class="{checked: isCheck}">
    <uni-icons type="checkmarkempty" size="22" color="#fff"></uni-icons>
  </view>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isCheck: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #aaa;
    overflow: hidden;
  }

  .checked{
    background-color: #FF8198;
    border-color: #FF8198;
  }
</style>
