<template>
    <section :class="[cname]">
        <swiper :options="options">
            <swiper-slide  v-for="item in imgList" :key="item.id">
                <img :src="item.img" alt="">
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        };
      }
    },
    imgList: {
      type: Array,
      default: []
    },
    cname: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="less">
</style>
