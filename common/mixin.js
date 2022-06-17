// 1.回到顶部
export const backTopOperationMixin = {
  data() {
    return {
      scrollTop: 0,
      oldScrollTop: 0,
      isShowBackTop: false,
      showBackTopSize: 1000,
    }
  },
  methods: {
    backTop(){
      this.scrollTop = this.oldScrollTop;
      this.$nextTick(() => {
        this.scrollTop = 0;
      });
    },
    isShowBack(position){
      this.isShowBackTop = position > this.showBackTopSize;
    },
    scroll(event) {
      this.oldScrollTop = event.detail.scrollTop;
      this.isShowBack(event.detail.scrollTop);
    },
  }
}