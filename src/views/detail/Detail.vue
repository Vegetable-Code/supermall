<template>
  <div id="detail">
    <DetailNavBar />
    <DetailSwiper :top-images="topImages" />
    <DetailBaseInfo :goods="goods" />
    <DetailShopInfo :shop="shop" />
  </div>
</template>

<script>
import DetailNavBar from "./child-comps/DetailNavBar";
import DetailSwiper from "./child-comps/DetailSwiper";
import DetailBaseInfo from "./child-comps/DetailBaseInfo"
import DetailShopInfo from "./child-comps/DetailShopInfo"

import { getDetail, Goods, Shop } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  created() {
    // 跳转路由
    this.iid = this.$route.params.iid;
    // 请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      // 轮播数据（图片）
      this.topImages = data.itemInfo.topImages;

      // 商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 店铺信息
      this.shop = new Shop(data.shopInfo)
    });
  }
};
</script>

<style scoped>
</style>