<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :top-images='topImages'></DetailSwiper>
  </div>
</template>

<script>
import DetailNavBar from "./child-comps/DetailNavBar";
import DetailSwiper from "./child-comps/DetailSwiper";

import { getDetail } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: [],
    };
  },
  created() {
    // 跳转路由
    this.iid = this.$route.params.iid;
    // 请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 轮播数据（图片）
      this.topImages = res.result.itemInfo.topImages;
    });
  }
};
</script>

<style scoped>
</style>