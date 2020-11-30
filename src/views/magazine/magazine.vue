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
            <img src="../../assets/img/zz/img2.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">10月上刊</div>
          </van-col>
        </van-row>
        <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img3.png" alt="" width="80%">
            <div class="van-ellipsis zi">十月下刊</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img4.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">九月上刊</div>
          </van-col>
        </van-row>
        <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img5.png" alt="" width="80%">
            <div class="van-ellipsis zi">九月下刊</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img6.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">九月下刊</div>
          </van-col>
        </van-row>
         <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img7.png" alt="" width="80%">
            <div class="van-ellipsis zi">八月下刊</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img8.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">八月上刊</div>
          </van-col>
        </van-row>
         <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img9.png" alt="" width="80%">
            <div class="van-ellipsis zi">七月上刊</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img10.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">六月下刊</div>
          </van-col>
        </van-row>
         <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img11.png" alt="" width="80%">
            <div class="van-ellipsis zi">六月上刊</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img12.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">五月下刊</div>
          </van-col>
        </van-row>
         <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img13.png" alt="" width="80%">
            <div class="van-ellipsis zi">五月上刊</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img14.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">四月下刊</div>
          </van-col>
        </van-row>
          <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img15.png" alt="" width="80%">
            <div class="van-ellipsis zi">四月上刊</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img16.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">三月下刊</div>
          </van-col>
        </van-row>
          <van-row  type="flex" justify="space-around">
          <van-col span="12" >
            <img src="../../assets/img/zz/img17.png" alt="" width="80%">
            <div class="van-ellipsis zi">三月上刊</div>
          </van-col>
            <van-col span="12">
            <img src="../../assets/img/zz/img18.png" style="margin-left: 20%;" alt="" width="80%">
            <div style="margin-left: 18%;" class="van-ellipsis zi">二月下刊</div>
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
  margin-bottom: 80px;
    margin-top: 62px;
}
</style>