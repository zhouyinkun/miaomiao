<template>
    <div class="wrapper" ref="wrapper">
        <!-- 使用插槽引入数据 -->
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name : 'Scroller',
    //父子通信:两个对象
    props : {
        handleToScroll : {
            type : Function,
            default : function(){}
        },
        handleToTouchEnd : {
            type : Function,
            default : function(){}
        }
    },
    mounted(){
        var scroll = new BScroll(this.$refs.wrapper,{
            //开启tap触发事件
            tap : true,
            //滚动的时候会派发scroll事件，会截流（一段时间内触发一次）
            probeType:1
        });
        this.scroll = scroll;

        scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos);
        });

        scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos);
        });
    },
    methods : {
        ToScrollTop(y){
            this.scroll.scrollTo(0,y);//进行y轴跳转
        }
    }
}
</script>

<style scoped>
    .wrapper{height: 100%;}
</style>