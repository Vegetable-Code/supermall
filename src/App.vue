<template>
  <div id="app">
    <router-view />
    <MainTabBar></MainTabBar>
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
</style>