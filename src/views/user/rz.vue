<template>
  <div>
    <van-icon class="fh" name="arrow-left" @click="fh" />
    <van-row class="top"></van-row>
    <div class="body">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>
<script>
import areaList from "../../assets/js/area"
import { Toast } from "vant";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      Toast("提交成功，请等待管理员审核");
      setTimeout(()=>{
             Toast.clear();
          this.$router.push({
              path:'/admin'
          })
      },500)
      
    },

    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    fh() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.van-cell-group {
  margin-top: 20px;
  padding: 0 10px;
}
.van-cell {
  margin-top: 19px;
}
.top {
  background: url("../../assets/img/hd.png") no-repeat;
  background-size: 100%;
  height: 139px;
}
.fh {
  position: fixed;
  color: white;
  font-size: 19px;
  top: 11px;
  left: 8px;
}
</style>