<template>
  <div id="app">
    <!-- 保持状态 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <!-- 底部导航 -->
    <MainTabBar class="max-index"></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>


<style scoped>
/* scoped表示作用域 */
@import "./assets/css/base.css";

/* 底部导航最高层 */
.max-index {
  z-index: 1000
}
</style>