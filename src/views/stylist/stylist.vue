<template>
  <div>
    <van-nav-bar title="设计师" class="top">
      <template #right>
        <van-icon name="search" size="24" />
      </template>
      <template #left>
        <van-button color="rgb(251,226,81)" icon="medal" size="mini" round>认证</van-button>
      </template>
    </van-nav-bar>
    <van-row id="list_top">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </van-row>
    <div class="body">
      <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang1.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">陈莉莉</span>
            <img style="    width: 25%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">贵阳市&nbsp;&nbsp;120-260元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img1.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img2.png" width="100%" alt=""></van-col>
      </van-row>
         <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang2.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">6度室内设计</span>
            <img style="    width: 20%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">重庆市&nbsp;&nbsp;60-120元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img3.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img4.png" width="100%" alt=""></van-col>
      </van-row>
         <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang3.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">十二间设计</span>
            <img style="    width: 23%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">贵阳市&nbsp;&nbsp;120-260元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img5.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img6.png" width="100%" alt=""></van-col>
      </van-row>
        <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang4.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">王英俊</span>
            <img style="    width: 25%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">济南市&nbsp;&nbsp;200-300元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img7.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img8.png" width="100%" alt=""></van-col>
      </van-row>
        <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang5.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">江建业北京独立设计师</span>
            <img style="    width: 17%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">北京市&nbsp;&nbsp;369-499元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img9.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img10.png" width="100%" alt=""></van-col>
      </van-row>
      <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang6.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">居器-独睿</span>
            <img style="    width: 20%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">北京市&nbsp;&nbsp;400-1200元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img11.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img12.png" width="100%" alt=""></van-col>
      </van-row>
      <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang7.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">谢瑞斌</span>
            <img style="    width: 25%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">北京市&nbsp;&nbsp;400-1200元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img13.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img14.png" width="100%" alt=""></van-col>
      </van-row>
        <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang8.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">赵婷_零玫贰搠设计</span>
            <img style="    width: 18%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">北京市&nbsp;&nbsp;400-1200元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img15.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img16.png" width="100%" alt=""></van-col>
      </van-row>
        <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang1.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">陈莉莉</span>
            <img style="    width: 25%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">贵阳市&nbsp;&nbsp;120-260元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img1.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img2.png" width="100%" alt=""></van-col>
      </van-row>
         <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang2.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">6度室内设计</span>
            <img style="    width: 20%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">重庆市&nbsp;&nbsp;60-120元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img3.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img4.png" width="100%" alt=""></van-col>
      </van-row>
         <van-row>
        <van-col span="24" class="jianjie">
          <p>
            <img src="../../assets/img/sjs_list/touxiang3.png" alt />
          </p>
          <p style="margin-top: 9px;">
            <span style="margin-left:10px;font-weight:bold">十二间设计</span>
            <img style="    width: 23%; margin-left: 10px;vertical-align: middle;" src="../../assets/img/sjs1.png" alt /><br>
            <span style="margin-left:10px;color:rgb(175, 175, 175);font-size:12px">贵阳市&nbsp;&nbsp;120-260元/㎡</span>
          </p>
        </van-col>
        <van-col span="11"><img src="../../assets/img/sjs_list/img5.png" width="100%" alt=""></van-col>
        <van-col span="11" offset="2"><img src="../../assets/img/sjs_list/img6.png" width="100%" alt=""></van-col>
      </van-row>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "../../components/TabBar";
export default {
  components: { TabBar },
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      option1: [
        { text: "全部报价", value: 0 },
        { text: "100元/㎡以下", value: 1 },
        { text: "100-199元/㎡以下", value: 2 },
        { text: "200-299元/㎡以下", value: 3 },
        { text: "300-500/㎡以下", value: 4 },
        { text: "500元/㎡以上", value: 5 },
      ],
      option2: [
        { text: "全部地区", value: 0 },
        { text: "北京市", value: 1 },
        { text: "上海市", value: 2 },
        { text: "广东省", value: 3 },
        { text: "四川省", value: 4 },
        { text: "浙江省", value: 5 },
        { text: "江苏省", value: 6 },
        { text: "重庆市", value: 7 },
        { text: "湖北省", value: 8 },
        { text: "山西省", value: 9 },
        { text: "陕西省", value: 10 },
        { text: "山东省", value: 11 },
        { text: "安徽省", value: 12 },
        { text: "天津市", value: 13 },
        { text: "新疆维吾尔自治区", value: 14 },
        { text: "云南省", value: 15 },
        { text: "辽宁省", value: 16 },
        { text: "广西壮族自治区", value: 17 },
        { text: "贵州省", value: 18 },
        { text: "海南省", value: 19 },
        { text: "河北省", value: 20 },
        { text: "河南省", value: 21 },
        { text: "黑龙江省", value: 22 },
        { text: "湖南省", value: 23 },
        { text: "吉林省", value: 24 },
        { text: "江西省", value: 25 },
        { text: "台湾", value: 26 },
      ],
      option3: [
        { text: "全部", value: 0 },
        { text: "只看同省", value: 1 },
      ],
    };
  },
};
</script>
<style scoped>
.jianjie{
  display: flex;
    line-height: 25px;
    font-size: 14px;
    margin: 10px 0 5px;
}
.body {
      margin-top: 90px;
  padding: 0 15px;
  margin-bottom: 60px;
}
#list_top>>>.van-dropdown-menu__title--active{
  color: rgb(175,175,175);
}
#list_top>>>.van-dropdown-item__option--active {
  color: black!important;
}
#list_top>>>.van-cell{
  color: rgb(175,175,175);
}
#list_top >>> .van-dropdown-menu__title {
  font-size: 12px;
}
.top >>> .van-dropdown-menu__title--active {
  color: black;
}
.top{
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.van-button {
  color: black !important;
  padding: 10px;
  font-size: 13px;
}
.top >>> .van-icon-search {
  color: black;
}
.top >>> .van-nav-bar__title {
  font-size: 20px;
  font-weight: bold !important;
}
#list_top{
   position: fixed;
    width: 100%;
    left: 0;
    top: 45px;
}
</style>