<template>
    <mt-header :title="title" fixed>
        <a @click="handleClick" slot="left">
        <mt-button icon="back"></mt-button>
        </a>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    title: {
      type: String,
      default: "标题"
    }
  },
  methods:{
      handleClick(){
          this.$router.go(-1);
      }
  }
};
</script>

<style scoped lang="less">
    .mint-header{
        height:.45rem;
        color:black;
        background-color: white;
        font-size: .16rem;
        z-index: 20;
    }
</style>

