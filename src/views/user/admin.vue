<template>
  <div>
    <div class="body">
      <van-icon name="setting-o" class="sz" />
      <van-icon name="comment-o" class="xx" />
      <van-row style="margin-top: 170px;" v-if="dl">
          <van-col span="8" style="text-align:right">
              <img src="../../assets/img/datu.png" alt="">
          </van-col>
          <van-col span="12" offset="1">
              <h3 class="lj">立即登录</h3>
              <p class="dls">登陆后发现更多精彩</p>
          </van-col>
           <van-col span="1" style="margin-top: 30px;">
              <van-icon name="arrow" />
          </van-col>
      </van-row>
      <van-grid :gutter="10" style="margin-top:40px">
  <van-grid-item icon="manager" text="身份认证" />
  <van-grid-item icon="wap-home" text="我的案例" />
  <van-grid-item icon="printer" text="草稿箱" /> 
  <van-grid-item icon="todo-list" text="我的话题" />
  <van-grid-item icon="star" text="我的收藏" />
  <van-grid-item icon="gem" text="积分管理" />
    <van-grid-item icon="column" text="我的小区" />
</van-grid>
<div class="verson">V4.7.3</div>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "../../components/TabBar";
export default {
  components: {
    TabBar,
  },
  data(){
      return{
      dl:true
      }
  }
};
</script>
<style scoped>
.verson{
    padding: 20px 0;
    width: 200px;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color:rgb(179, 179, 179);
    font-family: '等线';
}
.lj{
    margin-top: 3px;
}
.dls{
    font-size: 13px;
    margin-top: 33px;
    font-family: '等线';
}
html::-webkit-scrollbar {
  display: none;
}
.body {
    padding: 1px 0;
  background: url("../../assets/img_Datu/bg.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  min-height: 800px;
}
.sz {
  position: absolute;
  top: 9px;
  right: 65px;
  color: white;
  font-size: 26px;
}
.xx {
  position: absolute;
  top: 9px;
  right: 15px;
  color: white;
  font-size: 28px;
}
</style>