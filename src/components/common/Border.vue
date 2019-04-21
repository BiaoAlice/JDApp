<template>
    <div :class="[cname,border]"></div>
</template>

<script>
export default {
  name: "Border",
  data(){
      return{
          border:'border'
      }
  },
  props:{
      cname:{
          type:String,
          default:''
      }
  }
};
</script>

<style scoped lang=less>
.border {
  padding-bottom: 0.1rem;
  border-bottom: 0.1rem solid #eee;
}
</style>

