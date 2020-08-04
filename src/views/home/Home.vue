<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners.list"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
// 组件导入
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./child-comps/HomeSwiper";
import RecommendView from "./child-comps/RecommendView";

// 网络请求
import { getHomeMulitData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMulitData().then(res => {
      this.banners = res.data.banner;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
.home-nav {
  color: white;
  background-color: rgb(255, 142, 150);
}
</style>