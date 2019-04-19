<template>
    <div :class="[cname]">
        <h3>{{title}}</h3>
        <slot/>
    </div>
</template>

<script>
export default {
    name:"panle",
    props:{
        title:{
            type:String,
            default:''
        },
        cname:{
            type:String,
            default:''
        }
    }
}
</script>

<style scoped lang="less">
    h3{
        font-size: .16rem;
        line-height: .56rem;
        text-align: center;
    }
</style>
