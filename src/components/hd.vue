<template>
    <div>
        <van-row class="head">
             {{title}}
        </van-row>
    </div>
</template>
<script>
export default {
    props:{
        title:{
             type:String,
        default:'杂志'
        }
       
    }
}
</script>
<style scoped>
.head{
    position:fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background: white;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 0;
    border-bottom: 1px solid rgb(218, 218, 218);
}
</style>