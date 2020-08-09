<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <Bscroll class="contents" ref="scroll">
      <home-swiper :banners="banners.list"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control class="tab-control" :titles="showList" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </Bscroll>

    <!-- 监听组件点击，修饰符 -->
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script scoped>
// 组件导入
import NavBar from "components/common/navbar/NavBar";
import Bscroll from "components/common/scroll/Bscroll";
import BackTop from "components/common/back-top/BackTop";

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
    // 通用组件
    NavBar,
    Bscroll,
    BackTop,

    // 业务组件
    TabControl,
    GoodsList,

    // 子组件
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
      },
      currentType: "pop"
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    showList() {
      return ["流行", "新款", "精选"];
    }
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
    },
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}

.home-nav {
  color: white;
  background-color: rgb(255, 142, 150);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 5;
}

.tab-control {
  position: sticky;
  top: 44px;
}

.centents {
  height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden;
}
</style>