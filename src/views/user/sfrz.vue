<template>
  <div>
    <van-icon name="arrow-left" @click="fh" class="fh" />
    <Hd title="身份认证"></Hd>
    <div class="body">
       <van-grid  :column-num="3" style="margin-top: 155px;">
  <van-grid-item icon="manager-o" text="身份标识" />
  <van-grid-item icon="hotel-o" text="业主预约" />
  <van-grid-item icon="friends-o" text="用户关注" />
</van-grid>
<p class="p1">从事室内设计相关行业的设<br>计师</p>
<p class="p2">认证PChouse设计师<span>至少一套</span>整屋<br>案例作品</p>
<p class="p3" @click="ljrz">立即认证</p>
    </div>
  </div>
</template>
<script>
import Hd from "../../components/hd";
export default {
  components: {
    Hd,
  },
  methods: {
    fh() {
      this.$router.go(-1);
    },
    ljrz(){
        this.$router.push({
            path:'/admin/sfrz/rz'
        })
    }
  },
};
</script>
<style scoped>
.p3{
    position: relative;
    top: 107px;
    width: 212px;
    text-align: center;
    margin-left: 81px;
    line-height: 59px;
}
.p2{
margin: 29px 0 0 89px;
 line-height: 24px;
    font-size: 15px;
    font-family: '等线';
    font-weight: bold;
    color: gray;
}
.p2 span{
    background: rgb(255, 230, 0);
    display: inline-block;
    padding: 1px;
    color: black;
}
.p1{
        margin: 139px 0 0 91px;
    line-height: 24px;
    font-size: 15px;
    font-family: '等线';
    font-weight: bold;
    color: gray;
}
.fh {
  position: fixed;
  z-index: 10;
  top: 12px;
  font-size: 21px;
  left: 11px;
}
.body {
    padding: 1px 0;
  background: url("../../assets/img/bg.png") no-repeat;
  width: 100%;
  background-size: 100%;
  margin-top: 46px;
  height: 750px;
}
</style>