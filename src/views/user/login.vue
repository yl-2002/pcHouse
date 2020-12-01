<template>
  <div>
    <van-row class="top">
      <van-icon name="arrow-left" @click="fh"/>登录
    </van-row>
    <van-row class="title">
      <h2>你好，欢迎回家</h2>
    </van-row>
    <van-form @submit="onSubmit" v-if="sss">
      <van-field
        v-model="froms.username"
        name="username"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="froms.password"
        center
        name="password"
        clearable
        :rules="[{ required: true, message: '请输入短信验证码' }]"
        maxlength="6"
        placeholder="请输入短信验证码"
      >
        <template #button v-if="oo">
          <van-button
            size="small"
            native-type="button"
            type="default"
            @click="yzm"
            :disabled="countFlag"
          >{{btnMsg}}</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button class="submit" round block color="rgb(254,238,151)">登录</van-button>
      </div>
    </van-form>
    <van-form @submit="onSubmits" v-if="ssss">
      <van-field
        v-model="from.usernames"
        name="usernames"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="from.pwds"
        name="pwds"
        type="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button class="submit" round block color="rgb(254,238,151)">登录</van-button>
      </div>
    </van-form>
    <p
      style="    text-align: center;
    margin-top: 23px;
    font-weight: bold;
    font-family: '等线';"
      @click="tab"
    >{{yz}}</p>
    <div class="ty">
      <van-checkbox
        v-model="checkeds"
        shape="square"
        checked-color="rgb(253,237,150)"
        style="padding-left: 53px;
    margin-top: 103%;"
        icon-size="12px"
      >
        <span style="font-size:12px">我已阅读并同意"用户使用协议"及"隐私政策"</span>
      </van-checkbox>
    </div>

    <van-notify v-model="show" type="success">
      <van-icon name="bell" style="margin-right: 4px;" />
      <span>您的验证码为{{num}}</span>
    </van-notify>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      sss: false,
      ssss: true,
      oo:false,
      checkeds: true,
      yz: "验证码登录",
      countNum: 6,
      // 用于倒计时标记，true-正在倒计时
      countFlag: false,
      // 定时器
      intervalBtn: {},
      //默认按钮的值
      btnMsg: "发送验证码",
      
      show: false,
      froms:{
    username: "",
   password: "",
      },
      num: "",
      from:{
          usernames: "",
          pwds: "",
      },
      owd: "123",
      admin: "123456",
    };
  },
  methods: {
      fh(){
          this.$router.go(-1)
      },
    tab() {
      if (this.yz == "密码登录") {
          console.log(this.yz)
        this.ssss = true;
        this.sss = false;
        this.oo=false,
        this.yz = "验证码登录";
      } else {
        this.ssss = false;
           this.oo=true,
        this.sss = true;
        this.yz = "密码登录";
      }
    },
    yzm() {
      this.num = Math.ceil(Math.random() * 1000000);
      this.show = true;
      this.countFlag = !this.countFlag;
      this.intervalBtn = setInterval(() => {
        if (this.countNum <= 0) {
          this.btnMsg = "发送验证码";
          this.countNum = 5;
          clearInterval(this.intervalBtn);
          this.countFlag = !this.countFlag;
        } else {
          this.countNum--;
          this.btnMsg = this.countNum + "秒后重发";
        }
      }, 1000);
      setTimeout(() => {
        this.show = false;
      }, 5000);
    },
    onSubmit(values) {
      Toast.loading("验证中...");
      setTimeout(() => {
        Toast.clear();
      }, 1000);
      if (values.username != this.admin) {
        setTimeout(() => {
          Toast.fail("手机号错误");
        }, 1000);
      } else if (values.password != this.num) {
        setTimeout(() => {
          Toast.fail("验证码错误");
        }, 1000);
      } else {
           var user = JSON.stringify(this.froms);
        setTimeout(() => {
          Toast.success("登录成功");
           localStorage.setItem("user", user);
          this.$router.push({
            path: "/admin",
          });
        }, 500);
      }
    },
    onSubmits(values) {
      Toast.loading("验证中...");
      setTimeout(() => {
        Toast.clear();
      }, 1000);
      if (values.usernames != this.admin) {
        setTimeout(() => {
          Toast.fail("手机号错误");
        }, 1000);
      } else if (values.pwds != this.owd) {
        setTimeout(() => {
          Toast.fail("密码错误");
        }, 1000);
      } else {
          var user = JSON.stringify(this.from);
        setTimeout(() => {
          Toast.success("登录成功");
          localStorage.setItem("user", user);
          this.$router.push({
            path: "/admin",
          });
        }, 500);
      }
    },
  },
};
</script>
<style scoped>
.ty >>> .van-checkbox__icon--checked .van-icon {
  color: black;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
.van-form {
  width: 358px;
  margin: 0 auto;
}
.submit {
  color: rgba(0, 0, 0, 0.7) !important;
}
.title {
  margin: 70px 0 70px 20px;
}
.top {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  font-family: "等线";
  box-shadow: 0 0 2px gainsboro;
  padding: 10px 0;
  background: white;
}
.top i {
  position: absolute;
  z-index: 10;
  left: 9px;
}
</style>