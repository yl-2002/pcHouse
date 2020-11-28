<template>
  <div>
    <van-row  class="top">
        <van-col class="logo" span="8" ><img src='../assets/img/logo.png' alt=""></van-col>
         <van-col span="8" :offset="7" class="icon_top"><van-icon name="search" /><van-icon name="plus" /></van-col>
    </van-row>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.top{
   top: 0px;
   background: white;
   left: 0;
   z-index: 2;
   width: 100%;
    position: fixed;
}
.logo{
    margin-left: 10px;
}
.icon_top{
  padding: 12px 0 0;
  display: flex;
  justify-content: flex-end;
}
.icon_top .van-icon:first-of-type{
    margin-right: 10px;
}
.icon_top .van-icon{
  font-size: 30px;
}
</style>