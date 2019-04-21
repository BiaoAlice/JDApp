<template>
    <div class="mark">
        <my-header  title="金融会员"/>
        <my-list :cname="cname" :src="src" content="会员服务"></my-list>
        <my-border />
        <my-list 
          v-for="item in cardArr" 
          :key="item.id" 
          cname="vipMyOne" 
          :src="item.img" 
          :title="item.title" 
          :content="item.content">
        </my-list>
        <my-border />
        <my-list cname="vipMyOne" :src="src1" title="实名认证"></my-list>
        <my-list cname="vipMyOne" :src="src2" title="帮助中心"></my-list>
    </div>
</template>

<script>
export default {
  name: "Mark",
  data(){
    return{
      src : '@/../static/img/vipMy.png',
      src1 : '@/../static/img/vipCard10.png',
      src2 : '@/../static/img/vipCard10.png',
      cname:"vipMy",
      cardArr:[]
    }
  },
  created(){
    let card = () => this.$axios.get("/vipCard.json");
    this.$axios.all([card()]) 
    .then(this.$axios.spread( (cardRes) => { 
      let {data:cardData} = cardRes;
      this.cardArr = cardData;
    }));
  }
};
</script>

<style scoped lang="less">
</style>


