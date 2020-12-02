<template>
    <div>
    <van-icon name="arrow-left" @click="fh" class="fh" />
    <Hd title="我的整屋案例"></Hd>
    <van-empty
  class="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
/>

    </div>
</template>
<script>
import Hd from "../../components/hd";
export default {
      components: {
    Hd,
  },
  methods:{
          fh() {
      this.$router.go(-1);
    },
  }
}
</script>
<style scoped>
.fh {
    z-index: 10;
  position: fixed;
  font-size: 19px;
  top: 11px;
  left: 8px;
}
.custom-image{
      margin-top: 73px;
}
  .custom-image .van-empty__image {
    width: 90px;
    height: 190px;
    
  

  }
</style>