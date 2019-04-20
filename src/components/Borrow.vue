<template>
    <div class="mark">
        <my-header  title="借钱"/>
        <section>
          <div class="box">
              <p class="one">最高可借</p>
              <p class="two"><span>￥</span>300,000</p>
              <p class="three"><button>立即登录</button></p>
          </div>
        </section>
        <my-swiper  :imgList= "imgArr" cname="my-swiper-first"/>
        <my-panle :class="cname"  title="有车有钱">
          <div class="card-box">
            <div>
              <img src="@/../static/img/borrowCardTitle1.png" alt="">
            </div>
            <div>
              <img src="@/../static/img/borrowCardTitle2.png" alt="">
            </div>
          </div>
          <div class="card">  
            <div v-for="item in cardArr" :key="item.id">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
            </div>
        </div>
        </my-panle>
    </div>
</template>

<script>
export default {
  name: "Mark",
  data(){
    return{
      imgArr:[],
      cname:"cname",
      cardArr:[]
    }
  },
  created(){
    let swiper = () => this.$axios.get("/borrowSwiper.json");
    let card = () => this.$axios.get("/borrowCard.json");
    this.$axios.all([swiper(),card()]) 
    .then(this.$axios.spread( (swiperRes,cardRes) => { 
      let {data:swiperData} = swiperRes;
      let {data:cardData} = cardRes;
      this.imgArr = swiperData;
      this.cardArr = cardData;
      }));

  }
};
</script>

<style scoped lang="less">
  section{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top:.1rem;
    border:1px solid #eee;
    .box{
      padding-left:.2rem;
      box-sizing: border-box;
      width:3.45rem;
      height: 2.04rem;
      background-image: url("../../static/img/borrowTitle.png");
      background-size: cover;
      color: #fff;
      .one{
        margin-top: .3rem;
      }
      .two{
        line-height: .6rem;
        font-size: .40rem;
        font-weight: 700;
        span{
          font-size: .20rem;
        }
      }
      .three{
        padding-left:.1rem;
        button{
          width: 1.03rem;
          height: .35rem;
          border-radius: .15rem;
          background: rgba(0, 0, 0, 0);
          background-image: url("../../static/img/borrowBtn.png");
          background-size: cover;
          border:0px;
          color: #fff;
        }
      }
    }
  }
    .card{
    width: 100%;
    height: 1.1rem;
    display:flex;
    justify-content: space-around;
    margin-top:.1rem;
    div{
      flex:1;
      text-align: center;
      height: 100%;
      img{
        width: .45rem;
        height: .45rem;
      }
      p{
        width: .69rem;
        margin-top: .1rem;
        font-size: .13rem;
        line-height: .13rem;
      }
    }
  }
  .card-box{
    display: flex;
    justify-content: space-around;
    div{
      width: 1.87rem;
      height: 1.16rem;
      img{
        width: 100%;
      }
    }
  }
</style>


