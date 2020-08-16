<template>
  <div class="detail-swiper">
    <Swiper>
      <SwiperItem v-for="(item) in topImages" :key="item.index" class="swiper-item">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper-item {
    height: 300px;
}
</style>