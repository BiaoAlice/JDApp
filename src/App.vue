<template>
  <div id="app">
    <router-view/>
    <mt-tabbar>
      <mt-tab-item v-for="item in tabbarArr" :key="item.id" :id="item.id">
        <img slot="icon" :src="item.img">
        {{item.title}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tabbarArr:[]
    };
  },
  created() {
    this.$axios.get("/tabbar.json").then(res => {
      let { data } = res;
      this.tabbarArr = data;
    });
  }
};
</script>
 
<style lang="less">
#app {
  max-width: 750px;
  margin: 0 auto;
}
.my-swiper-first {
  img {
    width: 100%;
  }
}
.my-swiper-scend {
  padding-bottom: 0.2rem;
  img {
    width: 1.25rem;
    height: 1.57rem;
    margin: 0 0.12rem 0 0.16rem;
  }
}
.mint-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0.5rem;
  z-index: 20;
  color:#B1B4BB;
  font-size: .11rem;
}
</style>
