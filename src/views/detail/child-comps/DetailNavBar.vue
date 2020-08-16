<template>
  <NavBar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="back" />
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in titles"
        :key="item.index"
        class="title-item"
        :class="{active: index === currentIndex}"
        @click="titleClick(index)"
      >{{item}}</div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
}

.title-item {
  flex: 1;
}

.active {
  color: rgb(255, 0, 255);
}

.back img {
  margin-top: 13px;
  width: 20px;
  height: 20px;
}
</style>