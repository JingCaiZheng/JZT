<template>
    <div id="allbg">
        <!--顶部导航条组件 -->
        <Topnav></Topnav>

        <el-container class="toppadding" >
            <el-aside  class="leftaside" v-if="shownav" style="position: fixed">
                    <!--左边导航栏-->
                <el-row class="r1" style="height:46.7vw" >
                    <el-col :span="14" class="c1" style="height:46.7vw" >
                        <router-link to="/" class="backword" title="返回首页">
                            <img src="../assets/img/index/back.png" alt="" class="img-responsive center-block imgscale">
                            <span>返回首页</span>
                        </router-link>
                        <ul class="lnavbg lf" >
                            <li v-for="(item,index) in leftnavs" 
                                :key="index"
                                class="lnav-items" 
                                @click.stop="changebgactive(item.path,index,$event)" 
                                @mouseenter.stop="entermore(index,$event)"
                                @mouseleave="enterless($event)">
                                <router-link :to="item.path">
                                                                                        <!--根据路由判断高亮 -->
                                    <img :src="require('../assets/'+item.pic)" alt="" v-show="activeindex!=item.path" class="lf img-responsive center-block  " id="myhighlight" >
                                    <img :src="require('../assets/'+item.pic2)" alt="" v-show="activeindex==item.path" class="lf img-responsive center-block  " id="myhighlight" > 
                                </router-link>
                                <!-- 子菜单 -->
                                <ul  v-show="hoveractive==index" :class="['lf','extra','']">
                                    <li class="text-left" v-for="(itm,idx) in item.more" :key="idx" @click.stop="changebgactive(itm.path,undefined,$event)">
                                                                            <!--根据路由判断高亮 -->                                
                                        <router-link :to="itm.path" :class="['extrafont',{'active':itm.path==activeindex}]">{{itm.mores}}</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <img src="../assets/img/index/erweima.png" alt="" class="img-responsive center-block lastimg imgscale">
                    </el-col>                                  
                </el-row>
            </el-aside>
          
            <el-container class="c-el-padding centercontainer" id="maincontainer">
                <el-main  class="c-el-padding">
                    <!--路由模块 -->
                    <el-row class="f7bgcolor">
                        <router-view></router-view>
                    </el-row>
                    <!-- 版权模块 -->
                    <el-row>
                        <Footer></Footer>
                    </el-row>
                </el-main>
            </el-container>
            <el-aside  class="rf rightaside " v-if="shownav" style="position: fixed">
                <!-- 右侧导航栏 -->                
                <ul >
                    <li v-for="(item,index) in rightnavs">
                        <a :href="'/#'+item.path" target='_blank'>
                            <img class="img-half-4 r-pic  center-block" :src="require('../assets/'+item.pic)" alt="" >
                            <p class="text-center fontwords" >{{item.names}}</p>
                        </a>
                    </li>
                </ul>
            </el-aside>
            <!-- 返回顶部组件 -->
            <div style="position: fixed;right:2%;bottom:5%">
                <Totop></Totop>
            </div>   
        </el-container>
    </div>
</template>

<script>
    // 引入组件
    import Totop from './Totop.vue'
    import Topnav from './Topnav.vue'
    import Footer from './Footer.vue'
    export default {
        // 存放组件
        components:{
            Totop,
            Topnav,
            Footer
        },
      
        data(){
            return {
                // 存放左右导航条数据
                leftnavs:[],
                rightnavs:[],
                // SS700左导航数据
                leftnavs1:[
                    {'path':'home','pic':'img/index/1.png','pic2':'img/index/a1.png'},                    
                    {'path':'','pic':'img/index/2.png','pic2':'img/index/a2.png',
                        'more':[
                            {'mores':'远程维护','path':'remote'},
                            {'mores':'设备维保','path':'maintenance'},
                            {'mores':'智能工厂','path':'intelligent'}
                        ]
                    },
                    {'path':'cloudmanagement','pic':'img/index/3.png','pic2':'img/index/a3.png'},
                    {'path':'pcenter','pic':'img/index/4.png','pic2':'img/index/a4.png'},
                ],
                // SS700右导航数据
                rightnavs1:[
                    {'path':'/allteach','names':'教程','pic':'img/index/learn.png'},
                    {'path':'','names':'下载','pic':'img/index/download.png'},
                    {'path':'','names':'电话','pic':'img/index/phone.png'},
                    {'path':'','names':'邮箱','pic':'img/index/email.png'},
                    {'path':'','names':'QQ','pic':'img/index/qq.png'},
                    {'path':'','names':'地址','pic':'img/index/address.png'},
                ],
                // 极智通左导航数据
                leftnavs2:[
                    {'path':'knowjzt','pic':'img/jzt/menu/jztybwjhtb-01.png','pic2':'img/jzt/menu/jztybjhtb-01.png'}, 
                    {'path':'service','pic':'img/jzt/menu/jztybwjhtb-02.png','pic2':'img/jzt/menu/jztybjhtb-02.png'}, 
                    {'path':'','pic':'img/jzt/menu/jztybwjhtb-03.png','pic2':'img/jzt/menu/jztybjhtb-03.png', 
                        'more':[
                            {'mores':'网络棒使用','path':'networkbar'},
                            {'mores':'插件安装及使用','path':'plugin'},
                            {'mores':'异地组网搭建方法','path':'aliennetwork'},
                            {'mores':'用户绑定及权限设置','path':'users'},
                        ]
                    },
                ],
                // 极智通右导航数据
                rightnavs2:[
                    {'path':'','names':'电话','pic':'img/index/phone.png'},
                    {'path':'','names':'邮箱','pic':'img/index/email.png'},
                    {'path':'','names':'QQ','pic':'img/index/qq.png'},
                    {'path':'','names':'地址','pic':'img/index/address.png'},
                ],
                // 极智通所有路由地址
                jztrouter:['/index/knowjzt','/index/networkbar','/index/plugin','/index/aliennetwork','/index/users','/index/service'],
                //不显示左右导航的路由
                navnone:['/index/allteach','/index/retrospect','/index/show','/index/recruit',],
                //定义左边高亮变量
                activeindex:'',
                hoveractive:null,
                // activeIndex: '1',
                // 是否显示左右导航栏
                shownav:false,
            }
        },
        methods:{
            //选择左边导航高亮
            changebgactive(path,index,$event){
                var _index2=document.querySelectorAll('.lnav-items:nth-child(2) img.lf')[0];
                var _index3=document.querySelectorAll('.lnav-items:nth-child(3) img.lf')[0];
                var _route=this.$route.path;
                if(this.jztrouter.indexOf(_route)!=-1){
                    // 极智通各处理方案
                    this.JZTstyle();
                    if(index==2){
                        // 极智通  子路由图案和首次跳转处理方案
                        var $e=$event.target;                                                                   
                        $e.src=require('../assets/img/jzt/menu/jztybjhtb-03.png');
                        this.$router.push('networkbar');
                        this.activeindex='networkbar';
                        return 
                    }else if(index===undefined){
                       // 极智通 子路由处理方案
                       _index3.src=require('../assets/img/jzt/menu/jztybjhtb-03.png'); 
                    }else{
                        // 极智通 处理拓展菜单方案
                        _index3.src=require('../assets/img/jzt/menu/jztybwjhtb-03.png'); 
                    }
                }else{
                    //SS700各处理方案
                    if(index==1){
                        // SS700  子路由图案和首次跳转处理方案
                        var $e=$event.target;                                                                   
                        $e.src=require('../assets/img/index/a2.png');
                        this.$router.push('remote');
                        this.activeindex='remote';
                        return 
                    }else if(index===undefined){
                         // SS700 自路由处理方案
                         _index2.src=require('../assets/img/index/a2.png')           
                    }else{
                       // SS700 处理拓展菜单方案
                       _index2.src=require('../assets/img/index/2.png'); 
                    }
                }
                this.activeindex=path
                console.log(this.activeindex)
            },
            entermore(index,e){
                var _route=this.$route.path;
                if(this.jztrouter.indexOf(_route)!=-1){
                // 如果是极智通路由
                    if(index==2){
                        $(e.target).find('.extra').css('background',"rgba(255,255,255,.6)")
                    }
                }else{
                    if(index==1){
                        $(e.target).find('.extra').css('background',"rgba(255,255,255,.6)")
                    }
                }
                this.hoveractive=index; 
            },
            enterless(e){
                $(e.target).find('.extra').css('background',"rgba(255,255,255,0)")
                this.hoveractive=null; 
            },
            // 是否是主页
            isshow(){
                if(this.$route.path=='/index/show'){
                    $('.back').css('display','none');
                }else{
                    $('.back').css('display','block');
                }
            },
            // 极智通子菜单的样式
            JZTstyle(){
                var timer=setTimeout(()=>{
                    $('.extrafont').css('fontSize','.9vw');
                    $('.extra').css({
                        'top':'73%',
                        'paddingLeft':0,
                        'height':'50%'
                    });
                },1);
               timer=null;
            },
            // SS700子菜单的样式
            SS700style(){
                var timer=setTimeout(()=>{
                    $('.extrafont').css('fontSize','1.2vw');
                    $('.extra').css({
                        'top':'15%',
                        'paddingLeft':'10%',
                        'height':'40%'
                    });
                },1);
               timer=null;
            },
        },
        mounted(){
            // 获取当前路由 配置地址高亮
            var _route=this.$route.path;
            this.isshow();
            if(this.jztrouter.indexOf(_route)!=-1){
            // 如果是极智通路由
                this.leftnavs=this.leftnavs2;
                this.rightnavs=this.rightnavs2;
                this.JZTstyle();
                //使模块居中    
               $('#maincontainer').addClass('centercontainer');
                this.shownav=true;
                if( _route!='/index/knowjzt'&&_route!='/index/service'){
                    // 暂时用定时器处理子菜单刷新_index3 is undefined 的error
                    var timer=setTimeout(()=>{
                        var _index3=document.querySelectorAll('.lnav-items:nth-child(3) img.lf')[0];
                        _index3.src=require('../assets/img/jzt/menu/jztybjhtb-03.png');
                    },1);
                    timer=null;
                }
            }else{
            // 如果是SS700路由
                this.leftnavs=this.leftnavs1;
                this.rightnavs=this.rightnavs1;
                this.SS700style();
                timer=null;
                //判断路由从而判断是否显示左右菜单
                if(this.navnone.indexOf(_route)!=-1){
                    this.shownav=false;
                    $('#maincontainer').removeClass('centercontainer');
                }else{
                    $('#maincontainer').addClass('centercontainer');
                    this.shownav=true;
                    if( _route=='/index/remote'||_route=='/index/maintenance'||_route=='/index/intelligent'){
                        // 暂时用定时器处理子菜单刷新_index2 is undefined 的error
                        var timer=setTimeout(()=>{
                            var _index2=document.querySelectorAll('.lnav-items:nth-child(2) img.lf')[0];
                            _index2.src=require('../assets/img/index/a2.png');
                        },1);
                        timer=null;
                    }
                }
            }
            this.activeindex=_route.slice(7);
        },
        watch: {  
            //顶部导航条监听
            $route(to, from) { 
                this.isshow();
                var _route=to.path;
                var _index2=document.querySelectorAll('.lnav-items:nth-child(2) img.lf')[0];
                if(this.jztrouter.indexOf(_route)!=-1){
                 // 如果是极智通路由
                    this.JZTstyle();
                    this.leftnavs=this.leftnavs2;
                    this.rightnavs=this.rightnavs2;
                    $('#maincontainer').addClass('centercontainer');
                    this.shownav=true;
                }else{
                    // 如果是SS700路由
                    this.leftnavs=this.leftnavs1;
                    this.rightnavs=this.rightnavs1;
                    this.SS700style();
                    // 由哪里来归哪里去
                    if(this.navnone.indexOf(to.path)!=-1){
                        this.shownav=false;
                        $('#maincontainer').removeClass('centercontainer');
                        this.activeindex=_route.slice(7);
                        return 
                    }else if(this.navnone.indexOf(from.path)!=-1){
                        this.shownav=true;
                        $('#maincontainer').addClass('centercontainer');
                    }else{
                        $('#maincontainer').addClass('centercontainer');
                        if( _route=='/index/remote'|| _route=='/index/maintenance'|| _route=='/index/intelligent'){
                            _index2.src=require('../assets/img/index/a2.png');
                        }else{
                            _index2.src=require('../assets/img/index/2.png');
                        }
                    }
                }
                this.activeindex=_route.slice(7);
            }  
        }
    }
</script>

<style scoped>
    /*这里设置两边距离屏幕边距 */
    #myhighlight{
        max-width:80%;
    }
    .f7bgcolor{
        background:#f7f7f7;
    }
    #allbg{
        background: #ededed !important;
    }
    .centercontainer{
        margin-left:11.5vw;
        margin-right:6%;
    }
    .toppadding{
        margin-top:50px;
    }
   
    /* 左侧导航栏 */
    .leftaside{
        position: absolute;
        z-index: 100;
        width:20% !important;
       height:46.7vw;     
    }
    .leftaside .c1{
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
        background-size:cover;
    }
    .leftaside .r1> .c1 .backword .img-responsive{
        display: inline-block !important;
        width:18%;
    }
    .leftaside .r1> .c1 .lastimg{
        display: inline-block !important;
        padding: 10%
    }
    .backword{
        padding-top:10%;
        padding-left:15%;        
        padding-bottom:10%;   
        font-size:1.2vw;
        color:#000;
        font-weight: 600;
        display: block;
        height:5vw;
        background: #73b5e4
    }
    .backword:hover{
        text-decoration: none;
    }
    /* 菜单ul样式 */
    .lnavbg{
        width:100%;
        height:50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;     
        position:relative;
        background: #ededed;
    }
    .lnavbg .lnav-items{
        display: block;
        height:25%;
        width:100%;
        padding-top:15%;
        padding-left:8%;
        padding-right:0%;  
        padding-bottom:10%;        
    }
    /* 子菜单ul */
    .extra{
        z-index: 1000;
        position: absolute;
        width:71%;
        padding-left:10%;
        height:50%; 
        left:100%;
        top:15%;
        text-align: center;
    }
    .extra>li{
        margin-top:15%;
        width: 100%;
    }
    .extrafont{
        color:#828181;
        font-size:1.2vw;
        display:block;
        width:100%;
        height:100%;
    }
    .extra>li>a.active{
        color:#248cca;
    }
    .extra>li>a:hover{
        color:#248cca;
        text-decoration: none;
    }
   
    /* 极智通路由时切换样式类 */
    .extra2{
        top:73% !important;
    }
    .extrafont2{
        font-size:.9vw !important;
    }
    /* 主体样式 */
    .el-main{
        background: #fff;
        border:1px solid #eee;                
    }
    /* 右侧导航栏 */
    .rightaside{
        position: absolute;
        border:1px solid #eee;
        right:0;
        background:rgba(233, 234,234,.6);
        width:6% !important;
        height:47.6vw;       
    }
    .rightaside>ul{
        height:38vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;     
    }
    .rightaside>ul>li{
       width:100%; 
    }
    .rightaside ul>li:hover p{
        color:#1296db;
    }
    .rightaside ul>li:hover a{
        text-decoration: none;
    }
    
    .r-pic{
        display: block !important;
        max-width: 40%;
    }
    .r-pic:hover{
        animation: myrotate .5s linear  1 alternate;
    }
    @media screen and (max-width: 767px) {
        .leftaside {
            display: none;
        }
        .rightaside {
            display: none;
        }
        .el-main{
            margin:0;
            padding:0;
            height:100%;
            background: #fff;
            border:1px solid #eee;                
        }
        .el-submenu{
            width:15% !important;
            display: block;
        }
        .centercontainer{
            margin-left:0;
            margin-right:0;
        }
    }

</style>