<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
// 组件导入
import NavBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "components/common/swiper";

// 网络请求
import { getHomeMulitData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem
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