<template>
  <div>
    <div class="body">
      <van-icon @click="sz" name="setting-o" class="sz" />
      <van-icon name="bell" class="xx" @click="xx" />
      <van-row style="margin-top: 170px;" v-if="dl" @click="login">
        <van-col span="8" style="text-align:right">
          <img src="../../assets/img/datu.png" alt />
        </van-col>
        <van-col span="12" offset="1">
          <h3 class="lj">立即登录</h3>
          <p class="dls">登陆后发现更多精彩</p>
        </van-col>
        <van-col span="1" style="margin-top: 30px;">
          <van-icon name="arrow" />
        </van-col>
      </van-row>
      <van-row style="margin-top: 170px;" v-if="dls">
        <van-col span="8" style="text-align:right">
          <img src="../../assets/img/1606838120320.jpeg" alt style="width: 79px;border-radius: 50%;"/>
        </van-col>
        <van-col span="8" offset="1">
          <h3 class="lj">{{name}}</h3>
          <p class="dls">欢迎您！</p>
        </van-col>
        <van-col span="4" style="margin-top: 30px;">
          <van-button type="danger" @click="zx" size="small">注销</van-button>
        </van-col>
      </van-row>
      <van-grid :gutter="10" style="margin-top:40px">
        <van-grid-item icon="manager" text="身份认证" to="/admin/sfrz"/>
        <van-grid-item icon="wap-home" text="我的案例" to="/admin/al"/>
        <van-grid-item icon="printer" text="草稿箱" to="/admin/cgx"/>
        <van-grid-item icon="todo-list" text="我的话题"  to="/admin/ht"/>
        <van-grid-item icon="star" text="我的收藏" to="/admin/shoucang"/>
        <van-grid-item icon="gem" text="积分管理" />
        <van-grid-item icon="wap-home" text="我的小区" />
      </van-grid>
      <div class="verson">V4.7.3</div>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "../../components/TabBar";
import { Toast } from "vant";
export default {
  components: {
    TabBar,
  },
  data() {
    return {
      dl: true,
      dls: false,
      name: "立即登录",
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    zx() {
      localStorage.removeItem("user");
       Toast.loading("注销中...");
        setTimeout(() => {
        Toast.clear();
      }, 1000);
      setTimeout(() => {
          Toast.success("注销成功");
          this.$router.go(0)
        }, 500);
    },
    checkLogin() {
      var user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.dl = false;
        this.dls = true;
        this.name = user.usernames||user.username;
      }
    },
    login() {
      this.$router.push({
        path: "/admin/login",
      });
    },
    sz() {
      this.$router.push({
        path: "/admin/shezhi",
      });
    },
    xx() {
      this.$router.push({
        path: "/admin/xx",
      });
    },
  },
};
</script>
<style scoped>
.verson {
  padding: 20px 0;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: rgb(179, 179, 179);
  font-family: "等线";
}
.lj {
  margin-top: 3px;
}
.dls {
  font-size: 13px;
  margin-top: 33px;
  font-family: "等线";
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