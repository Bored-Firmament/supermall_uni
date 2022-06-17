<template>
  <view class="detail-comment" v-if="comments.length !== 0">
    <view class="comment-header">
      <view>用户评价</view>
      <view>
        <text>更多</text>
        <text decode>&gt;</text>
      </view>
    </view>
    <view class="comment-box" v-for="comment in comments">
      <view class="comment-user">
        <image :src="comment.user.avatar"></image>
        <text>{{ comment.user.uname }}</text>
      </view>
      <view class="comment-info">
        <view class="comment-desc">{{ comment.content }}</view>
        <view class="comment-goods">
          <text>{{ showDate(comment.created) }}</text>
          <text>{{ comment.style }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import { formatDate } from "common/utils";

  export default {
    name: "DetailComment",
    props: {
      comments: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      showDate(value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    }
  }
</script>

<style lang="scss">
  .detail-comment{
    color: #333;
    border-bottom: 6rpx solid #f2f5f8;
    
    .comment-header{
      padding: 0 20rpx;
      display: flex;
      justify-content: space-between;
    
      height: 100rpx;
      line-height: 100rpx;
      vertical-align: top;
      border-bottom: 2rpx solid #f2f5f8;
      
      .comment-header{
        text{
          display: inline-block;
          height: 100%;
        }
        text:first-child{
          vertical-align: top;
        }
        text:last-child{
          width: 30rpx;
        }
      }
    }
    .comment-box{
      padding: 20rpx;
      
      .comment-user{
        image{
          border-radius: 50%;
          width: 80rpx;
          height: 80rpx;
          vertical-align: top;
          margin-right: 20rpx;
        }
        text{
          line-height: 80rpx;
        }
      }
      .comment-info{
        padding-top: 20rpx;
        
        .comment-desc{
          font-size: 12px;
          color: #666;
          line-height: 40rpx;
        }
        .comment-goods{
          font-size: 24rpx;
          color: #999;
          line-height: 60rpx;
          
          text:first-child{
            margin-right: 20rpx;
          }
        }
      }
    }
  }
</style>
