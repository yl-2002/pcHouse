<template>
  <div>
    <van-row class="head">
      <van-icon class="fh" name="arrow-left" @click="fh" />
      {{title}}
    </van-row>
    <van-overlay :show="show" @click="show = false">
      <div class="block">
        <van-cell title="保留最近下载一期" @click="shows=true" />
        <van-cell title="保留最近下载三期" @click="shows=true" />
        <van-cell title="清理全部" @click="showss=true" />
        <van-cell title="取消" @click="show = false" />
      </div>
    </van-overlay>

    <div class="body">
      <van-cell title="QQ账号" value="绑定" />
      <van-cell title="新浪帐号" value="绑定" />
      <van-cell style="margin-top:10px" title="清理杂志" is-link @click="qlzz" />
      <van-cell title="清理缓存" is-link @click="showNotify" />
      <van-cell style="margin-top:10px" title="隐私政策" is-link />
      <van-cell title="用户使用协议" is-link />
      <van-cell title="账号注销" is-link @click="show2=true" />
      <van-cell title="意见反馈" is-link @click="yjfk"/>
      <van-cell title="关于我们" is-link />
    </div>
    <van-dialog v-model="shows" title="提示" show-cancel-button>
      <p style="margin: 31px 0;text-align:center">保存成功</p>
    </van-dialog>
    <van-dialog v-model="showss" title="提示" show-cancel-button>
      <p style="margin: 31px 0;text-align:center">确定清楚吗？</p>
    </van-dialog>
    <van-notify v-model="show1" type="success">
      <van-icon name="bell" style="margin-right: 4px;" />
      <span>清除成功！</span>
    </van-notify>
    <van-dialog v-model="show2" title="注销" show-cancel-button :beforeClose="chargeBtn">
      <van-field
        v-model="value"
        center
        clearable
        maxlength="4"
        label="短信验证码"
        @focus="showKeyboard= true"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary" @click="fs">发送验证码</van-button>
        </template>
      </van-field>
    </van-dialog>
    <van-number-keyboard v-model="value" :show="showKeyboard" @blur="showKeyboard = false" />
    <van-notify v-model="show3" type="success">
      <span>您的验证码是{{num}}</span>
    </van-notify>
    <van-notify v-model="show4" type="success">
      <span>注销成功！</span>
    </van-notify>
    <van-notify v-model="show5" type="warning">
      <span>请输入正确的验证码</span>
    </van-notify>
  </div>
</template>
<script>
import Hd from "../../components/hd";
export default {
  components: {
    Hd,
  },
  data() {
    return {
      show2: false,
      show1: false,
      show3: false,
      show4: false,
      show5: false,
      value: "",
      showKeyboard: false,
      showss: false,
      show: false,
      shows: false,
      title: "设置",
      num: 123,
    };
  },
  methods: {
      yjfk(){
          this.$router.push({
              path:'/admin/shezhi/yjfk'
          })
      },
    chargeBtn(action, done) {
      //确认or取消
      if (action === "confirm") {
        if (this.value == this.num) {
          this.show4 = true;
          setTimeout(() => {
            this.show4 = false;
          }, 1000);
          this.value=''
          done();
        } else {
          this.show5 = true;
           setTimeout(() => {
            this.show5 = false;
          }, 1000);
          done(false);
        }
      } else {
        done();
      }
    },
    fs() {
      this.num = Math.ceil(Math.random() * 10000);
      this.show3 = true;
      setTimeout(() => {
        this.show3 = false;
      }, 2000);
    },
    showNotify() {
      this.show1 = true;
      setTimeout(() => {
        this.show1 = false;
      }, 1000);
    },
    qlzz() {
      this.show = true;
    },
    fh() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.van-number-keyboard {
  z-index: 9999;
}
.block > div {
  border-bottom: 1px solid rgb(236, 236, 236);
  text-align: center;
  font-weight: bold;
  font-family: "等线";
}
.block {
  width: 270px;
  margin: 50% auto;
  align-items: center;
  height: 120px;
  background-color: #fff;
}
.van-cell__value {
  color: red;
}
.head {
  background: white;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(218, 218, 218);
}
.body {
  min-height: 765spx;
  background: rgb(228, 228, 228);
}
.fh {
  position: absolute;
  top: 11px;
  font-size: 23px;
  left: 8px;
}
</style>