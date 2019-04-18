<template>
    <div class="home">
        <my-header  title="京东金融"/>
        <my-swiper :imgList= "imgArr" :cname="silder"/>
        <div class="bannle">
            <ul>
                <li v-for = "item in bannleArr" :key="item.id">
                    <p>
                        <img :src="item.img" alt="">
                    </p>
                    <p class="title">{{item.title}}</p>
                </li>
            </ul>
        </div>
        <my-panle class="my-panle" title="- 理财精选 -">
            <div class="panle-box">
                <div v-for="item in finacingArr" :key="item.id">
                    <p class="box-title">
                        <span>{{item.title}}</span>
                        <label>{{item.label}}</label>
                    </p>
                    <p class="box-num">{{item.num}}</p>
                    <p class="box-footer">{{item.footer}}</p>
                </div>
            </div>
        </my-panle>
        <my-panle class="my-panle" title="- 赏金任务 -">
            <my-swiper cname ="my-swiper-scend" :imgList= "imgList" :options = "options"/>
        </my-panle>
        <my-panle class="my-panle" title="- 保险保证 -">
            <my-swiper cname ="my-swiper-scend" :imgList= "safeList" :options = "options"/>
        </my-panle>
        <my-panle class="my-panle" title="- 众筹新品 -">
            <my-swiper cname ="my-swiper-scend" :imgList= "productList" :options = "options"/>
        </my-panle>
        <footer>
            <ul>
              <li v-for="item in footerList" :key="item.id">{{item.msg}}</li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgArr: [],
      bannleArr: [],
      finacingArr: [],
      silder: "my-swiper-first",
      options: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            clickable: true
          }
      },
      imgList: [],
      safeList:[],
      productList:[],
      footerList:[]
    };
  },
  created() {
    let swiper = () => this.$axios.get("/swiper.json"),
        bannle = () => this.$axios.get("/bannle.json"),
        financing = () => this.$axios.get("/financing.json"),
        sj = () => this.$axios.get("sj.json"),
        safe = () => this.$axios.get("safe.json"),
        product = () => this.$axios.get("product.json"),
        footer = () => this.$axios.get("homeFooter.json");
    this.$axios.all([swiper(), bannle(), financing(),sj(),safe(),product(),footer()]).then(
      this.$axios.spread((a, b, c, d, e, f, g) => {
        let swiperData = a.data,
          bannleData = b.data,
          financingData = c.data,
          sjData = d.data,
          safeData = e.data,
          productData = f.data,
          footerData = g.data
        this.imgArr = swiperData;
        this.bannleArr = bannleData;
        this.finacingArr = financingData;
        this.imgList = sjData;
        this.safeList = safeData;
        this.productList = productData;
        this.footerList = footerData;
      })
    );
  }
};
</script>

<style scoped lang="less">
.my-swipe-first {
  img {
    width: 100%;
  }
}
.bannle {
  width: 100%;
  height: auto;
  ul {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    li {
      float: left;
      width: 0.93rem;
      height: 0.9rem;
      font-size: 0.13rem;
      padding-top: 0.2rem;
      font-family: PingFangSC-Regular, Arial, "Helvetica Neue", Helvetica,
        sans-serif;
      color: #666;
      p {
        text-align: center;
        img {
          width: 0.45rem;
          height: 0.45rem;
        }
      }
      .title {
        line-height: 0.18rem;
        margin-top: 0.06rem;
      }
    }
  }
}
.panle-box {
  width: 100%;
  height: 2.18rem;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  div {
    width: 1.71rem;
    height: 1.09rem;
    padding-left: 0.16rem;
    float: left;
    border-bottom: 1px solid #eee;
  }
  div:nth-of-type(2n-1) {
    border-right: 1px solid #eee;
  }
  .box-title {
    margin: 0.17rem 0 0.08rem;
    color: #333;
    line-height: 0.21rem;
    font-size: 0.15rem;
    font-weight: 700;
    label {
      border: 1px solid #ff5155;
      line-height: 0.17rem;
      font-size: 0.1rem;
      color: red;
      font-weight: 400;
      min-width: 0.57rem;
      box-sizing: border-box;
      height: 0.17rem;
      padding: 0 0.01rem;
    }
    span {
      line-height: 0.21rem;
    }
  }
  .box-num {
    font-weight: 700;
    font-size: 0.22rem;
    line-height: 0.29rem;
    color: #ff5155;
  }
  .box-footer {
    font-size: 0.12rem;
    line-height: 0.17rem;
    color: #999;
  }
}
.my-panle {
  border-bottom: 0.1rem solid #eee;
  font-weight: 700;
}
footer{
  font-size: .12rem;
  ul{
    background-color: #f5f5f5;
    li{
      min-height: .36rem;
      padding:.12rem .16rem;
      text-align: center;
      line-height: 1.6;
      box-sizing: border-box;
      color:#999;
      border-top:1px solid #ddd;
    }
  }
}
</style>

