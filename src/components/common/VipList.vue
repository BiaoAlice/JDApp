<template>
    <section>
        <div class="box" :class="[cname]">
            <div class="img-box">
                <img :src="src" alt="">
            </div>
            <span>{{title}}</span>
            <div class="content">
                {{content}}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"VipList",
    props:{
        cname:{
            type:String,
            default:""
        },
        src:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        },
        content:{
            type:String,
            default:''
        }
    }
}
</script>

<style scoped lang="less">
    .box{
        &::after{
            content: "";
            display: block;
            clear: both;
        }
        .img-box{
            float: left;
            box-sizing: border-box;
        }
        .content{
            position: relative;
            color: #999;
            float: right;
            margin-right: .3rem;
            height: 100%;
            font-size: .12rem;
            &::after{
                content: " > ";
                display: block;
                position: absolute;
                right:-.2rem;;
                top:0;
            }
        }
    }
</style>
