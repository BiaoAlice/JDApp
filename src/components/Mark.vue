<template>
    <div class="mark">
        <my-header title="赚钱"/>
        <div class="titleImg">
          <img src="@/../static/img/titleImg.png" alt="">
        </div>
        <my-swiper :imgList= "imgArr" :cname="silder"/>
        <div class="card">  
            <div v-for="item in cardArr" :key="item.id">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
            </div>
        </div>
         <my-panle :class="cname"  title="今日推荐">
           <my-swiper cname ="my-swiper-third" :imgList= "tjArr" :options = "options"/>
         </my-panle>
         <div class="img-box">
           <img src="@/../static/img/makeGg.jpg" alt="">
         </div>
         <div class="border"></div>
          <my-panle :class="cname"  title="小金库">
            <p class="p">稳健灵活 小白精选</p>
           <my-swiper cname ="my-swiper-third" :imgList= "smallArr" :options = "options"/>
         </my-panle>
         <div class="border"></div>
        <my-panle :class="cname"  title="保险保障">
          <div class="card-box">
            <div class="card-left">
              <label>今日推荐</label>
              <h1>100万</h1>
              <p>京东账号安全险</p>
              <button>立即查看</button>
            </div>
            <div class="card-right">
              <div v-for="item in safeArr" :key="item.id">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
              </div>
            </div>
          </div>
         </my-panle>
         <div class="border"></div>
         <div class="img-box">
           <img src="@/../static/img/makeGg2.jpg" alt="">
         </div>
         <div class="border"></div>
    </div>
</template>

<script>
export default {
  name: "Mark",
  data(){
    return{
      silder: "my-swiper-first",
      imgArr:[],
      cardArr:[],
      cname:"cname",
      options: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            clickable: true
          }
      },
      tjArr:[],
      smallArr:[],
      safeArr:[]
    }
  },
  created(){
     let swiper = () => this.$axios.get("/markSwiper.json");
     let card = () => this.$axios.get("/makeCard.json");
     let Tj = () => this.$axios.get("/makeTj.json");
     let small = () => this.$axios.get("/makeSmall.json");
     let safe = () => this.$axios.get("/makeSafe.json");
     this.$axios.all([swiper(),card(),Tj(),small(),safe()]) 
          .then(this.$axios.spread( (swiperRes,cardRes,tjRes,smallRes,safeRes) =>{ 
            let { data:swiperData} = swiperRes; 
            let { data:cardData} = cardRes; 
            let { data:tjData} = tjRes; 
            let { data:smallData} = smallRes; 
            let { data:safeData} = safeRes; 
            this.imgArr = swiperData;
            this.cardArr = cardData;
            this.smallArr = smallData;
            this.safeArr = safeData;
        }));
  }
};
</script>

<style scoped lang="less">
  .titleImg{
    width: 100%;
    height: .6rem;
    text-align: center;
    position: fixed;
    top:.45rem;
    z-index: 20;
    img{
      width:100%;
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
        margin-top: .1rem;
        font-size: .13rem;
        line-height: .13rem;
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
  .border{
    padding-bottom:.1rem;
    border-bottom:.1rem solid #eee;
  }
  .p{
    font-size: .14rem;
    padding-bottom: .1rem;
    padding-left: .16rem;
  }
  .card-box{
    width: 100%;
    height: 1.3rem;
    display: flex;
    justify-content: space-around;
    &:after{
      content:"";
      display: block;
      clear: both;
    }
    .card-left{
      width: 1.06rem;
      height: 100%;
      position: relative;
      box-shadow: .05rem  0 .05rem #ddd;
      label{
        position: absolute;
        top:0;
        left:0;
        color: #fff;
        background-color: #000;
        width: .5rem;
        padding: .05rem;
        text-align: center;
        font-size: .12rem;
      }
      h1{
        margin-top: .3rem;
        font-size: .25rem;
        line-height: .31rem;
        color: #1bd5c7;
        text-align: center;
      }
      p{
        font-size: .12rem;
        text-align: center;
        line-height: .17rem;
      }
      button{
        width: .82rem;
        height: .25rem;
        margin:.1rem .1rem;
        background-color: #1bd5c7;
        color: white;
        border-radius: .15rem;
      }
    }
    .card-right{
      width: 2.32rem;
      height: 100%;
      box-shadow: .05rem  0 .05rem #ddd;
        box-sizing: border-box;
        padding-top:.15rem;
      &::after{
        content:"";
        display: block;
        clear: both;
      }
      div{
        width:.77rem;
        height: .65rem;
        float: left;
        text-align: center;
        font-weight: 400;
        box-sizing: border-box;
        img{
          width:.28rem;
          height: .28rem;
        }
        p{
          line-height: .13rem;
          font-size: .13rem;
          text-align: center;
        }
      }
    }
  }

</style>


