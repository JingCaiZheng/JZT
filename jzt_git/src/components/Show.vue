<template>
    <!-- 首页 -->
    <div class="text-center">
        <!-- <Topnav></Topnav> -->
        <!-- 轮播 -->
        <el-carousel :interval="5000" arrow="always" class="carousels" height="60.25vw">
            <el-carousel-item v-for="(item,index) in carousels" :key="index">
                <img :src="require('../assets/'+item.pic)" alt="" class="img-responsive">
            </el-carousel-item>
        </el-carousel>
        <el-container class="c-el-padding">
            <el-main class="c-el-padding">   
                <el-row v-for="(item,index) in aboutus" :class="['r1','pdtop5','pdbtm5',{'bge7f5fd':index%2==0,'bgfff':index%2==1}  ]"   :key="index">
                    <el-col :xs="{'span':'24','offset':'0'}" :sm="{'span':'22','offset':'1'}" :md="{'span':'20','offset':'2'}" :lg="{'span':'20','offset':'2'}">
                        <el-row>
                            <el-col :span="6" :offset="9" class="bottom2">
                                <img :src="require('../assets/'+item.titlepic)" alt="" class="img-responsive center-block ">
                            </el-col>
                        </el-row>
                        <el-row v-if="!item.details">
                            <el-col :span="16" :offset="4" >
                                <p class="aboutus suojin" :title="item.title">{{item.title}}</p>
                                <img :src="require('../assets/'+item.showpic[0].pics)" alt="" class="img-responsive top2 imgscale center-block" v-if="item.showpic.length==1">
                                <el-row class="top5" v-if="item.showpic.length>1">
                                    <el-col :span="8"  v-for="(itm,idx) in item.showpic" :key="idx" >
                                        <img :src="require('../assets/'+itm.pics)" alt="" class="img-responsive center-block imgscale ">
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <!--上下二选一模板 -->
                        <el-row v-if="item.details">
                            <el-col :span="16" :offset="4">
                                <el-row >
                                   <el-col 
                                   :xs="{'span':'20','offset':'2'}" 
                                   :sm="{'span':'20','offset':'2'}" 
                                   :md="{'span':'10','offset':'1'}" 
                                   :lg="{'span':'10','offset':'1'}"
                                   v-for="(itm,idx) in item.details"
                                   :key="idx"
                                   class="top5 overflow-hidden"
                                   >
                                        <img :src="require('../assets/'+itm.showpic)" alt="" class="img-responsive center-block imgscale">
                                        <p class=" top5 teachwords" :title="itm.title">{{itm.title}}</p>
                                        <div class="fivefonts" :title="itm.words">{{itm.words}}</div>
                                   </el-col>
                                </el-row>
                                <el-row >
                                    <el-col 
                                    :xs="{'span':'20','offset':'2'}" 
                                    :sm="{'span':'20','offset':'2'}" 
                                    :md="{'span':'7','offset':'1'}" 
                                    :lg="{'span':'7','offset':'1'}"
                                    v-for="(itm,idx) in item.details2"
                                    :key="idx"
                                   class="top5 overflow-hidden"
                                    >
                                         <img :src="require('../assets/'+itm.showpic)" alt="" class="img-responsive center-block imgscale">
                                         <p class=" top5 teachwords" :title="itm.title">{{itm.title}}</p>
                                         <div class="fivefonts" :title="itm.words">{{itm.words}}</div>
                                    </el-col>
                                 </el-row>
                            </el-col>
                        </el-row>
                    </el-col>                            
                </el-row>

            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Topnav from './Topnav.vue'
    export default {
        components:{
            // Topnav
        },
        data(){
            return {
                //轮播
                carousels:[
                    {'pic':"img/show/001.png"},
                    {'pic':"img/show/002.png"},                   
                ],
                aboutus:[
                    {
                        'title':`杭州羽智科技有限公司，是中国领跑的工业物联网解决方案提供商，专业为中小企业提供工业互联网服务，
                                专注于工业智能化产品开发。致力于打通人、机、料、法、环各个环节信息互通。本公司倾力推出的SS700智能远程模块将让企业大大提高生产效率，
                                获得良好的投入产出比，令越来越多的企业感受到因卓越科技而带来的优越和高效。`,
                        'titlepic':'img/show/sygdbt-11.png',
                        'showpic':[
                            {"pics":'img/show/sygdpt-01.png'},
                        ]
                    },
                    {
                        'title':`羽智科技不仅提供硬件销售，更提供服务……`,
                        'titlepic':'img/show/sygdbt-12.png',
                        'showpic':[
                            {"pics":'img/show/sygdpt-02.png'},
                            {"pics":'img/show/sygdpt-03.png'},
                            {"pics":'img/show/sygdpt-04.png'},
                        ]
                    },
                    {
                        'title':``,
                        'titlepic':'img/show/sygdbt-13.png',
                        'showpic':[],
                        'details':[
                            {
                                'showpic':'img/show/sygdpt-05.png',
                                'title':'完善的云平台配套服务',
                                'words':`公司开发了独立完善的云管理平台，从设备添加、联网管理、远程维护、
                                         监控管理到仪表盘、人机界面的建立等等都提供一站式的解决方案。`
                                
                            },
                            {
                                'showpic':'img/show/sygdpt-06.png',
                                'title':'自主研发产品和技术',
                                'words':`公司拥有专利技术和软件著作权等独立知识产权。
                                        研发实力过硬，具有一支技术实力强大的研发团队。`
                            },
                            
                        ],
                        'details2':[
                            {
                                'showpic':'img/show/sygdpt-07.png',
                                'title':'多渠道商务合作',
                                'words':`采取招聘代理商/经销商、与上游服务商及FA厂商合作、渗透行业巨头点式营销等等多种渠道商务合作。`
                            },
                            {
                                'showpic':'img/show/sygdpt-08.png',
                                'title':'销售通路广',
                                'words':` 江浙沪、珠三角、西南及东北地区都有实力代理商和经销商合作，产品覆盖全国，甚至远销欧美等海外市场。 `
                            },
                            {
                                'showpic':'img/show/sygdpt-09.png',
                                'title':'免费在线技术支持',
                                'words':`公司为广大用户提供免费在线咨询服务，提供技术支持，也可以加入QQ技术交流群。 `
                            },
                            
                        ]
                    },
                    {
                        'title':`公司凭借自身技术优势，产品积极开展自主研发，拥有多项软件著作权和专利。`,
                        'titlepic':'img/show/sygdbt-14.png',
                        'showpic':[
                            {"pics":'img/show/sygdpt-10.png'},
                        ]
                    },
                   
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
    
    .bottomtitle{
        color:#000;
        font-size: 1.1vw;
        font-weight: bold;
    }
    .aboutus{
        color:#727171;
        font-size: 1.5vw;
        text-align: left;
        position:relative;
        line-height:2.5vw;
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