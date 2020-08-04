<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners.list"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView />
    <TabControl class="tab-control" :titles="['流行', '新款', '精选']" />
    <GoodsList :goods="goods['pop'].list" />
  </div>
</template>

<script>
// 组件导入
import NavBar from "components/common/navbar/NavBar";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "./child-comps/HomeSwiper";
import RecommendView from "./child-comps/RecommendView";
import FeatureView from "./child-comps/FeatureView";

// 网络请求
import { getHomeMulitData, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMulitData();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 1.请求多个数据
    getHomeMulitData() {
      getHomeMulitData().then(res => {
        this.banners = res.data.banner;
        this.recommends = res.data.recommend.list;
      });
    },
    // 2.请求商品数据
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;

      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}

.home-nav {
  color: white;
  background-color: rgb(255, 142, 150);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>