<template>
  <div>
    
<van-tabbar v-model="active" active-color="rgb(192, 194, 98)" inactive-color="#000" @change="onChange" route>
  <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="orders-o" to="/magazine" @click="zz">杂志</van-tabbar-item>
  <van-tabbar-item icon="friends-o">设计者</van-tabbar-item>
  <van-tabbar-item icon="contact">我的</van-tabbar-item>
</van-tabbar>
    
  </div>
</template>
<script>
export default {
  data() {
      return{
          active:0
      }
  },
  methods:{
     onChange(index) {
      if(index==1){
        this.active==1
        console.log(this.active)
      }
    }
  }
};
</script>
<style scoped>
.bottom {
    background: white;
  padding-top: 5px;
  border-top: 1px solid rgb(202, 202, 202);
  text-align: center;
  width: 100%;
}
.bottom div {
  font-family: "等线";
  font-size: 12px;
}
.bottom div p {
  margin-top: 3px;
}
</style>