<template>
    <div>
        <Hd :title="杂志"></Hd>
         <div  class="box">
         <h2>2020</h2>
  <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img1.png" alt="" width="80%">
            <div class="van-ellipsis zi">艺境致美，点亮生活</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img1.png" style="margin-left: 35px;" alt="" width="80%">
            <div style="  margin-left: 31px;" class="van-ellipsis zi">艺境致美，点亮生活</div>
          </van-col>
        </van-row>
         </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Hd from "../../components/hd";
import TabBar from "../../components/TabBar";
export default {
  components: {
    Hd,
    TabBar,
  },
  data() {
      return{
          
      }
  },
}
</script>
<style scoped>
.van-col--12{
      margin-top: 15px;
}
.zi{
  margin-top: 3px;
      font-size: 15px;
    font-weight: bold;
    font-family: '等线';

}
h2{
  font-weight: normal;
   color: rgb(192, 192, 192);
}
.box{
  padding: 0 15px;
  min-height: 1000px;
    margin-top: 62px;
}
</style>