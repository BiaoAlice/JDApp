<template>
    <div>
        <my-header  title="省钱"/>
        <div class="login">
            <h1>亲，你还没有登录哦~</h1>
            <div class="login-a">
              登录
            </div>
        </div>
        <my-swiper  :imgList= "imgArr" cname="my-swiper-first"/>
        <div class="card-box">
          <div>
            <img src="@/../static/img/saveMoney1.png" alt="">
          </div>
          <div>
            <img src="@/../static/img/saveMoney2.png" alt="">
          </div>
        </div>
        <my-panle :class="cname"  title="支付优惠">
          <div class="img-box">
            <img src="@/../static/img/saveTitle.jpg" alt="">
          </div>
        </my-panle>
        <div class="poster">
          <div class="left">
           <img src="@/../static/img/savePoster1.jpg" alt="">
          </div>
          <div class="right">
            <div>
              <img src="@/../static/img/savePoster2.png" alt="">
            </div>
            <div class="bottom">
              <img src="@/../static/img/savePoster3.png" alt="">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Save",
  data(){
    return{
      imgArr:[],
      cname:"cname"
    }
  },
  created(){
    let swiper = () => this.$axios.get("/saveSwiper.json");
    this.$axios.all([swiper()]) 
    .then(this.$axios.spread( (swiperRes) => { 
      let {data:swiperData} = swiperRes;
      this.imgArr = swiperData;
      }));
  }
  };
</script>

<style scoped lang="less">
.login{
  height: .69rem;
  border-top:1px solid #eee;
  box-sizing: border-box;
  padding-left: .2rem;
  position: relative;

  h1{
    width: 100%;
    line-height: .69rem;
    color:#b67e38;
    font-size: .23rem;
  }
  .login-a{
    position: absolute;
    top:-.2rem;
    right: .2rem;
    width: .5rem;
    height: .6rem;
    color: white;
    text-align: center;
    line-height: .7rem;
    border-radius: 40%;
    background: red;
  }
}
.card-box{
    display: flex;
    justify-content: space-around;
    padding-top:.15rem;
    div{
      width: 1.87rem;
      height: 1.16rem;
      img{
        width: 100%;
      }
    }
  }
  .img-box{
    width: 100%;
    height: 1rem;
    padding-top:.1rem;
    padding-bottom: .2rem;
    img{
      width:100%;
    }
  }
  .poster{
    height: 2.16rem;
    display: flex;
    justify-content: space-around;
    img{
      width: 100%;
      height: 2.16rem;
    }
    .left{
      width: 1.75rem;
      box-shadow: .05rem 0 5px #eee;
    }
    .right{
      width: 1.75;
      div{
        width: 100%;
        height: 1.03rem;
        margin-bottom: .1rem;
        box-shadow: 0 .1rem 5px #eee;
        img{
          width: 1.75rem;
          height: .95rem;
        }
      }
      .bottom{
        margin-bottom: 0;
      }
    }
  }
</style>


