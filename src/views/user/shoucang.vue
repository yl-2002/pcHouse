<template>
  <div>
    <van-icon name="arrow-left" @click="fh" class="fh" />
    <Hd title="我的收藏"></Hd>
    <van-cell title="整屋案例" is-link style="margin-top: 59px;" to="/admin/al"/>
    <van-cell title="草稿箱" is-link to="/admin/cgx"/>
    <van-cell title="话题" is-link to="/admin/ht"/>
  </div>
</template>
<script>
import Hd from "../../components/hd";
export default {
  components: {
    Hd,
  },
  methods: {
    fh() {
      this.$router.go(-1);
    },
  },
};
</script>
<style  scoped>
.fh {
  z-index: 10;
  position: fixed;
  font-size: 19px;
  top: 11px;
  left: 8px;
}
</style>