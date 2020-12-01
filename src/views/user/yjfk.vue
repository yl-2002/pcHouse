<template>
    <div>
         <van-row class="head">
      <van-icon class="fh" name="arrow-left" @click="fh" />
      意见反馈
    </van-row>
    <div style="min-height:770px;background:rgb(220,220,220)">
        <van-field
  v-model="message"
  rows="3"
  autosize
  
  type="textarea"
  maxlength="110"
  placeholder="请输入留言"
  show-word-limit
/>
<van-button plain type="default" size="small" @click="message=''">清除</van-button>
<van-button  type="info" size="small" @click="tj">提交</van-button>
    </div>
    </div>
</template>
<script>
import { Notify } from 'vant';
export default {
    components: {
    [Notify.Component.name]: Notify.Component,
  },
    data(){
return{
    message:''
}
    },
    methods:{
        tj(){
            if (this.message=='') {
                Notify({ type: 'danger', message: '请输入意见反馈' });
            }else{
                Notify({ type: 'success', message: '留言成功!' });
                this.message=''
                this.$router.go(-1)
            }
        },
        fh(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.van-button--small{
    margin: 22px 0 0 10px;
        left: 200px;
    width: 70px;
}
.van-cell{
    top: 12px;
}
.head {
  background: white;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-family: '等线';
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 1px solid rgb(218, 218, 218);
}
.fh {
  position: absolute;
  top: 11px;
  font-size: 23px;
  left: 8px;
}
</style>