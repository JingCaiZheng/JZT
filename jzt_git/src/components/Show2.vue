<template>
    <!-- 首页 -->
    <div class="text-center">
        <!-- 轮播 -->
        <el-carousel :interval="5000" arrow="always" class="carousels" height="60.25vw">
            <el-carousel-item v-for="(item,index) in carousels" :key="index">
                <img :src="require('../assets/'+item.pic)" alt="" class="img-responsive">
            </el-carousel-item>
        </el-carousel>
        <el-container class="c-el-padding">
            <el-main class="c-el-padding">   
                <el-row class="r1">
                    <el-col :xs="{'span':'24','offset':'0'}" :sm="{'span':'22','offset':'1'}" :md="{'span':'20','offset':'2'}" :lg="{'span':'18','offset':'3'}">
                        <el-row style="margin-bottom:2%">
                            <el-col :span="6" :offset="9">
                                <!-- <a href="http://www.jzt2025.com">
                                    <img src="../assets/img/show/yunguanli.png" alt=""class="img-responsive center-block imgscale">
                                </a> -->
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="6" v-for="(item,index) in navs" :key="index">
                                <router-link :to="item.path">
                                    <img :src="require('../assets/'+item.pic)" alt="" class="img-half-6 center-block cardrotate">
                                    <p class="bottomtitle">{{item.name}}</p>
                                </router-link>
                            </el-col>
                        </el-row>   
                    </el-col>                            
                </el-row>
               
                <el-row class="r2">
                    <el-col class="text-center c1">
                        <el-row class="r1 top5">
                            <p class="titlestyle">工业智能化之路</p>                            
                        </el-row>
                        <el-row class="r2">
                            <img src="../assets/img/show/roud02.png" alt="" class="roundimg2 img-responsive lf">
                            <img src="../assets/img/show/roud03.png" alt="" class="roundimg3 img-responsive rf">
                            <img src="../assets/img/show/roud05.png" alt="" class="roundimg5 img-responsive lf">
                            <img src="../assets/img/show/roud04.png" alt="" class="roundimg4 img-responsive rf">
                            <img src="../assets/img/show/roud01.png" alt="" class="roundimg1 img-responsive center-block">
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="r3 ">
                    <p class="titlestyle top2 bottom5">发展战略</p>
                    <img src="../assets/img/show/case01.png" alt="" class="img-responsive center-block">
                </el-row>
                <el-row class="r4 pdtop5">
                    <p class="titlestyle">关于我们</p>
                    <el-col :span="18" :offset="3">
                        <p class="aboutus suojin" :title="aboutus[0].title">
                            {{aboutus[0].title}} 
                        </p>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                carousels:[
                    {'pic':"img/show/001.png"},
                    {'pic':"img/show/002.png"}                    
                ],
                navs:[
                    {'pic':'img/show/btn01.png','path':'/home','name':'SS700智能远程模块'},
                    {'pic':'img/show/btn04.png','path':'/knowjzt','name':'私有云移动办公'},                 
                    {'pic':'img/show/btn02.png','path':'/','name':'SCADA系统'},
                    {'pic':'img/show/btn03.png','path':'/retrospect','name':'产品追溯系统'},
                ],
                aboutus:[
                    {
                        'title':`羽智科技，是中国领跑的工业物联网解决方案提供商，致力于打通人、机、料、法、
                              环各个环节信息互通。本公司倾力推出的SS700智能远程模块将让企业大大提高生产效率，
                              获得良好的投入产出比，令越来越多的企业感受到因卓越科技而带来的优越和高效。`
                    }
                ]
            }
        },
        mounted(){
            $(window).scroll(()=>{
                var top=$(document).scrollTop();
                var topr1=$('.r1 p.titlestyle').offset();
                var topr3=$('.r3 p.titlestyle').offset();
                if(!topr1||!topr3)return 
                if(top>=topr1.top*.7&&top<=topr1.top*1.3){
                    $('.roundimg2').addClass('left50');
                    $('.roundimg3').addClass('right50');                                                      
                    $('.roundimg4').addClass('left50');                                                      
                    $('.roundimg5').addClass('right50');  
                    $('.roundimg1').addClass('opacity1');                                                                                                                                                                                                                                                  
                }else if(top>topr1.top*1.3||top<topr1.top*.5){
                    $('.roundimg2').removeClass('left50');
                    $('.roundimg3').removeClass('right50');                                                      
                    $('.roundimg4').removeClass('left50');                                                      
                    $('.roundimg5').removeClass('right50');  
                    $('.roundimg1').removeClass('opacity1');
                }
            })
        },
    }
</script>

<style scoped>
    .titlestyle{
        padding:2% 0 1% 0;
        font-size:2.5vw;
        font-weight: blod;
        color:#000;
    }
    .bottomtitle{
        color:#000;
        font-size: 1.1vw;
        font-weight: bold;
    }
    .aboutus{
        color:#475669;
        font-size: 1.5vw;
        text-align: left;
        position:relative;
        line-height:3vw;
        overflow:hidden;
    }
    .carousels , .carousels>.el-carousel__container {
        width:100%;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-main{
        overflow: initial !important;                
    }
    .el-main>.r1{
        padding:5% 0 5% 0;
        background: #e6e7e8;
        perspective:500;
        -webkit-perspective:500;
    }
    .el-main>.r2{
        overflow: hidden;
    }
    .el-main>.r2>.c1,.el-main>.r2>.c1>.el-row{
        height:100%;
    }
    .el-main>.r2>.c1>.r2{
        min-height:31.14vw;
        position: relative;
    }
    .el-main>.r2>.c1>.el-row{
        padding:0 10% 0 10%; 
    }
     .roundimg2,.roundimg3,.roundimg4,.roundimg5{
        max-width:561px;
        position: absolute;
        z-index: 2;
        width:40% !important;
        transition: all .5s linear;
    }
    .roundimg4,.roundimg5{
        transition: all .7s linear;        
    }
    .roundimg1{
       position: absolute;
       max-width:556px;        
       left:50%;
       transform: translateX(-50%);
       z-index: 1;
        width:50%;
        opacity: .5;
        transition: all .5s linear;
    }
    .left50{
        left:50% !important;
    }
    .right50{
        right:50% !important;
    }
    .left100{
        left: 100%;
    }
    .opacity1{
        opacity: 1;
    }
    .roundimg2{
        left:0%;
        top:7%;
        transform: translateX(-110%);
    }
    .roundimg3{
        right:0%;
        top:7%;
        transform: translateX(110%);
    }
    .roundimg4{
        left:0%;
        bottom:23%;
        transform: translateX(-110%);
    }
    .roundimg5{
        right:0%;
        bottom:23%;
        transform: translateX(110%);
    }
    .el-main>.r3{
        background: #e6e7e8;
        padding-bottom:3%; 
    }
    .el-main>.r4{
        background: #fff;
        padding-bottom:3%; 
    }
    @media screen   and (max-width:767px) {
        .bottomtitle{
            font-size: .8vw;
        }
        .aboutus{
            font-size: 1vw;
            line-height: 5vw;
        }
        .carousels , .carousels>.el-carousel__container {
            width:100vw !important;
        }
    }
    @media screen   and (min-width:100px) and (max-width:500px) {
        .el-main>.r2>.c1>.r2{
            min-height:57.14vw;
        }  
    }
    @media screen and (min-width:501px )and ( max-width:619px) {
        .el-main>.r2>.c1>.r2{
            min-height:57.14vw;
        }
    }
    @media screen and (min-width:620px )and ( max-width:767px) {
        .el-main>.r2>.c1>.r2{
            min-height:57.14vw;
        }
    }
    @media screen and ( min-width:768px) and (max-width:1024px) {
        .aboutus{
            font-size: 1.4rem;
        }
        .el-main>.r2>.c1>.r2{
            min-height:57.14vw;
        }
    }
    @media screen and ( min-width:1025px) and (max-width:1200px) {
        .roundimg4{
            bottom:18%;
        }
        .roundimg5{
            bottom:18%;
        }
        .el-main>.r2>.c1>.r2{
            min-height:52.14vw;
        }
    }
    @media screen and ( min-width:1201px) and (max-width:1400px) {
        .roundimg4{
            bottom:18%;
        }
        .roundimg5{
            bottom:18%;
        }
        .el-main>.r2>.c1>.r2{
            min-height:48.14vw;
        }
    }
    @media screen and ( min-width:1401px) and (max-width:1600px) {
        .roundimg4{
            bottom:18%;
        }
        .roundimg5{
            bottom:18%;
        }
        .el-main>.r2>.c1>.r2{
            min-height:40.14vw;
        }
    }
    @media screen and ( min-width:1601px) and (max-width:1750px) {
        .roundimg4{
            bottom:18%;
        }
        .roundimg5{
            bottom:18%;
        }
        .el-main>.r2>.c1>.r2{
            min-height:35.14vw;
        }
    }
    @media screen and ( min-width:1751px) and (max-width:1919px) {
        .roundimg4{
            bottom:18%;
        }
        .roundimg5{
            bottom:18%;
        }
        .el-main>.r2>.c1>.r2{
            min-height:32.14vw;
        }
    }
    @media screen and ( min-width:1920px) {
        .roundimg4{
            bottom:19%;
        }
        .roundimg5{
            bottom:19%;
        }
    }
    .cardrotate{
        -webkit-perspective:10000;
        -webkit-transition: all 1.5s;
        -moz-transition: all 1.5s;
        -ms-transition: all 1.5s;
        -o-transition: all 1.5s;
        -webkit-transform:rotateY(0deg);
    }
    .cardrotate:hover{
        -webkit-transform:rotateY(180deg);
    }
</style>