<template>
    <div>
        <van-icon name="arrow-left" @click="fh"/>
        <Hd title="我的消息"></Hd>
        <van-empty description="暂无消息" />
    </div>
</template>
<script>
import Hd from '../../components/hd'
export default {
    components:{
        Hd
    },
    methods:{
        fh(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.van-icon{
        z-index: 10;
    font-size: 22px;
    top: 12px;
    left: 11px;
}
</style>