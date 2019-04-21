<template>
  <div id="app">
    <transition name="fade" mode="out-in">  
      <router-view/>
    </transition>
    <mt-tabbar  v-model="selected">
      <mt-tab-item v-for="item in tabbarArr" :key="item.id" :id="item.id">
          <img slot="icon" :src="item.img" />
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
      tabbarArr:[],
      selected:''
    };
  },
  created() {
    this.$axios.get("/tabbar.json").then(res => {
      let { data } = res;
      this.tabbarArr = data;
    });
  },
  watch:{
    selected(newVal,oldVal){
      this.$router.push(newVal);
    }
  }
};
</script>
 
<style lang="less">
#app {
  max-width: 750px;
  margin: 0 auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.my-swiper-first {
  img {
    width: 100%;
  }
}
.my-swiper-scend ,.my-swiper-third {
  padding-bottom: 0.2rem;
  img {
    width: 1.25rem;
    height: 1.57rem;
    margin: 0 0.12rem 0 0.16rem;
  }
}
.my-swiper-third{
  img{
    width: 1.05rem;
    height: 1.30rem;
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
.mint-tab-item{
  a{
    display: block;
    width: 100%;
    height: 100%;
  }
}
.cname{
  h3{
    font-weight: 700 !important;
    font-size: .18rem !important;
    text-align: left !important;
    padding-left:.16rem;
  }
}
.vipMy{
  border-top:1px solid #eee;
  height: .7rem;
  line-height: .7rem;
  .img-box{
    padding: .1rem .16rem 0;
    img{
      width: .5rem;
      height: .5rem;
    }
  }
}
.vipMyOne{
  border-bottom:1px solid #eee;
  height: .56rem;
  line-height: .56rem;
  .img-box{
    height: .56rem;
    padding: .05rem .16rem 0;
    img{
      width: .24rem;
      height: .24rem;
    }
  }
}
</style>
