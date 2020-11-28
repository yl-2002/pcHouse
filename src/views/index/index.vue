<template>
  <div>
    <Header></Header>
    <div class="box">
      <van-row type="flex" justify="space-between" class="list">
        <van-col span="6">
          <img src="../../assets/img/icon.png" alt />
          <p>整屋案例</p>
        </van-col>
        <van-col span="6">
          <img src="../../assets/img/icon1.png" alt />
          <p>装修攻略</p>
        </van-col>
        <van-col span="6">
          <img src="../../assets/img/icon2.png" alt />
          <p>居住信息</p>
        </van-col>
        <van-col span="6">
          <img src="../../assets/img/icon3.png" alt />
          <p>免费试用</p>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around" class="ht_list">
        <van-col span="12">
          <img src="../../assets/img/huati.png" alt />
        </van-col>
        <van-col span="12">
          <img src="../../assets/img/shiping.png" alt />
        </van-col>
      </van-row>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
        <van-swipe-item>
          <img src="../../assets/img/banner1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/banner2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/banner3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/banner4.png" alt />
        </van-swipe-item>
      </van-swipe>
      <van-swipe
        :loop="false"
        :width="205"
        :show-indicators="false"
        style="margin-left:10px;margin-top:20px"
      >
        <van-swipe-item>
          <img src="../../assets/img/title1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title4.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title5.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title6.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title7.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title8.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title9.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/title10.png" alt />
        </van-swipe-item>
      </van-swipe>
      <h4 class="jx">为你精选</h4>
      <van-row>
        <img class="imgs" src="../../assets/img/img1.png" alt />
        <van-col span="24" class="fs">复古法式|历史保护建筑“老破小"的优雅转身</van-col>
        <van-col span="24" class="im">
          <img style="vertical-align: middle;width:30px" src="../../assets/img/touxiang1.png" alt />
          <span>示觉设计-尹琳娟YIN</span>
          <img style="width: 45px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt />
        </van-col>
      </van-row>
      <van-row style="margin-left:10px;margin-top:20px">
        <van-col span="8" class="tl">大家都在讨论</van-col>
        <van-col span="8" :offset="8" class="gd">
          查看更多
          <van-icon name="arrow" style="vertical-align: middle;" />
        </van-col>
      </van-row>
      <van-swipe
        :loop="false"
        :width="190"
        :show-indicators="false"
        style="margin-left:10px;margin-top:20px;margin-right:10px"
      >
        <van-swipe-item>
          <img src="../../assets/img/os1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/os2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/os3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/os4.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/os5.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/img/os6.png" alt />
        </van-swipe-item>
      </van-swipe>
      <van-row class="nr">
        <img class="imgs" src="../../assets/img/img2.png" />

        <van-col span="24" class="fs">480㎡叠拼别墅，打造摩都轻奢优雅格调</van-col>
        <van-col span="24" class="im">
          <img style="vertical-align: middle;width:30px" src="../../assets/img/touxiang2.png" alt />
          <span>7kkdesign设计</span>
          <img style="width: 45px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt />
        </van-col>
      </van-row>
      <van-row class="nr">
        <img class="imgs" src="../../assets/img/img3.png" />

        <van-col span="24" class="fs">110㎡温馨小两居，四房变三房,清新素雅...</van-col>
        <van-col span="24" class="im">
          <img style="vertical-align: middle;width:30px" src="../../assets/img/touxiang3.png" alt />
          <span>夏夏zhou</span>
          <img style="width: 45px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt />
        </van-col>
      </van-row>
      <van-row class="nr">
        <img class="imgs" src="../../assets/img/img4.png" />

        <van-col span="24" class="fs">90后夫妻的130m温暖家，被多功能书房圈粉</van-col>
        <van-col span="24" class="im">
          <img style="vertical-align: middle;width:30px" src="../../assets/img/touxiang4.png" alt />
          <span>合肥李秀玲设计</span>
          <img style="width: 45px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt />
        </van-col>
      </van-row>
      <van-row class="nr">
        <img class="imgs" src="../../assets/img/img5.png" />

        <van-col span="24" class="fs">有娃之家的高能精装房改造</van-col>
        <van-col span="24" class="im">
          <img style="vertical-align: middle;width:30px" src="../../assets/img/touxiang5.png" alt />
          <span>尚舌生活设计</span>
          <img style="width: 45px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt />
        </van-col>
      </van-row>
        <van-row style="padding-right:10px">
       <van-col span="24" class="tls">
           <h5 class="httl">话题讨论</h5>
           <div class="bg"></div>
           <p class="pp">新房装修,你都有哪些装出高级feel的独门秘籍?</p>
           <div class="tu"><img src="../../assets/img/tmtl.png" width="227px" alt=""></div>
       </van-col>
      </van-row>
       <van-row class="nr">
        <img class="imgs" src="../../assets/img/img6.png" />

        <van-col span="24" class="fs">130m现代日式，打造重脑力工作者下班后的...</van-col>
        <van-col span="24" class="im">
          <img style="vertical-align: middle;width:30px" src="../../assets/img/touxiang6.png" alt />
          <span>成都宏福槿设计公司</span>
          <img style="width: 45px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt />
        </van-col>
      </van-row>
      <van-row class="nr">
        <img class="imgs" src="../../assets/img/img7.png" />

        <van-col span="24" class="fs">决定厨房幸福感的王炸家电非TA莫属松下纤...</van-col>
        
      </van-row>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
export default {
  components: {
    Header,
    TabBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.tu{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.pp{
    width: 288px;
    margin: 0 auto;
    font-family: '等线';
    font-weight: 500;
    line-height: 23px;
}
.bg{
    height: 5px;
    width: 20px;
    background: rgb(253,133,36);
    box-shadow: 0 0 1px gray;
    margin: 10px auto;
}
.httl{
    text-align: center;
    font-family: '等线';
}
.tls{
    margin: 15px 5px 5px 5px;
    padding: 20px 10px 20px 10px;
    border: 5px solid rgba(255,237,223);
}
.nr {
  margin-top: 11px;
}
.tl {
  font-weight: 600;
  font-family: "等线";
}
.gd {
  font-weight: 600;
  padding-right: 10px;
  color: rgb(192, 192, 192);
  font-family: "等线";
  text-align: right;
}
.im span {
  font-size: 14px;
  margin-left: 7px;
  margin-right: 7px;
  font-weight: bold;
  font-family: "等线";
  color: rgb(150, 150, 150);
}
.im {
  padding-left: 10px;
}
.fs {
  padding-left: 10px;
  font-family: "等线";
  font-weight: 600;
  margin: 8px 0;
}
.imgs {
  width: 95%;
  margin-left: 10px;
}
.jx {
  font-family: "等线";
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 8px 0 8px 8px;
}
.my-swipe .van-swipe-item {
  margin-top: 20px;
  color: #fff;
  font-size: 20px;
  text-align: center;
}

.ht_list {
  text-align: center;
  margin-top: 30px;
}
.box {
  min-height: 100%;
  margin-bottom: 60px;
}
.list {
  text-align: center;
  margin-top: 80px;
}
.list div {
  font-family: "等线";
  font-size: 14px;
}
.list div p {
  margin-top: 8px;
}
</style>