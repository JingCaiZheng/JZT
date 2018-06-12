<template>
    <div>
        <!-- 返回顶部组件 -->
        <div class="totop" title="回到顶部" @click="backTotop">
            <img src="../assets/img/totop/back-to-top.png" alt="" class="img-responsive">
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            backTotop(){
                var timer = null;
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(function fn(){
                    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                    if(oTop > 0){
                        scrollTo(0,oTop-200);
                        timer = requestAnimationFrame(fn);
                    }else{
                        cancelAnimationFrame(timer);
                    }
                })
            }
        },
        mounted(){
            $(window).scroll(function(){
                var top=$(document).scrollTop();
                var height=$(document).height();
                if(top>=height*.4){
                    $('.totop').addClass('totopactive');
                }else{
                    $('.totop').removeClass('totopactive');
                }
            })
        }
    }
</script>

<style scoped>
    .totop{
        max-width:50px;
        display: block;
        margin:0 auto;
        transition: all .5s linear;
        opacity: 0;
        position: relative; 
        z-index:-1;
    }
    .totop:hover{
        cursor:pointer;
    }
    .totopactive{
       transform: translateY(50%);
        opacity:1;
        z-index: 1000;
    }
    @media screen and (max-width:768px){
        .totop{
            max-width:40px;
        }
    }
</style>