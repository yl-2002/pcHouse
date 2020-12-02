<template>
    <div>
    <van-icon name="arrow-left" @click="fh" class="fh" />
    <Hd title="我的话题讨论"></Hd>
 <van-empty image="search"  class="custom-image"/>

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
 
</style>