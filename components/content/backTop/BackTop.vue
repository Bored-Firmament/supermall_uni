<template>
  <view class="back-top" @click="backTopClick">
    <uni-icons class="top-icon" type="arrow-up" size="50"></uni-icons>
  </view>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backTopClick() {
      this.$emit('backTop')
    }
  }
}
</script>

<style lang="scss">
  .back-top {
    position: fixed;
    bottom: 60px;
    right: 10px;
    width: 50px;
    height: 50px;
    
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
</style>
