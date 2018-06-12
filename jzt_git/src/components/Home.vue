<template>
    <div>
        <el-container>
            <!-- 了解SS700 -->
            <el-main class="c-el-padding">
                <el-row class="r1">
                    <el-col>
                        <img src="../assets/img/home/shoutu-01.png" alt="" class="img-responsive center-block" style="width:100vw;">
                    </el-col>   
                </el-row>
                <el-row class="r2 bgcolorf2f2f2">
                    <el-col :span='10' :offset="7" class="c1">
                        <img src="../assets/img/home/biaoti-01.png" alt="" class="img-responsive center-block">
                    </el-col>
                    <el-col :span='16' :offset="4" class="c2 text-left" >
                        <p >
                            连接<span class="spancolor1">PLC、HMI、机器人、视觉</span>
                            等工控设备，通过云管理平台进行<span class="spancolor1">远程生产管理
                            </span>和<span class="spancolor1">维保</span>等工作，助推企业<span class="spancolor1">智能化</span>。
                        </p>
                    </el-col>
                </el-row>
                <el-row class="r3">
                    <el-col class="c1  " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row>
                            <el-col :span='14' :offset="5" >
                                <img src="../assets/img/home/tupian-01.png" alt="" class="img-responsive center-block ">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="r4 bgcolorf2f2f2">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="r1">
                            <el-col :span='16' :offset="4" class="c1 ">
                                <img src="../assets/img/home/biaoti-02.png" alt="" class="img-half-6 center-block ">
                            </el-col>
                            <el-col :span='20' :offset="2"  class="c2 ">
                                <img src="../assets/img/home/hecheng-01.png" alt="" class="img-responsive center-block ">
                            </el-col>
                            <el-col :span='20' :offset="2"  class="c3 ">
                                <img src="../assets/img/home/tpt-01.png" alt="" class="img-responsive center-block ">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="r5 bgcolorf2f2f2">
                    <el-col  class="c1">
                        <el-row class="r1">
                            <el-col :span='10' :offset="7" class="c1 top5">
                                <img src="../assets/img/home/biaoti-04.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col  class="c2" :xs='{span:20,offset:2}' :sm='{span:18,offset:3}' :md='{span:8,offset:4}' :lg='{span:8,offset:4}'>
                                <ul class="top5">
                                    <li v-for="(item,index) in r5" :key="index" class="lititle">
                                        <span :class="item.color">0{{index+1}}</span> &nbsp;
                                        <span class="pcolor2">{{item.title}}</span>
                                    </li>
                                </ul>
                            </el-col>
                            <el-col  class="c3 " :xs='{span:16,offset:4}' :sm='{span:14,offset:5}' :md='{span:10,offset:0 }' :lg='{span:10,offset:0}'>
                                <img src="../assets/img/home/tupian-02.png" alt="" class="img-responsive center-block ss700pic">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="r6 bottom5 pdbtm5">
                    <el-col class="c1 top5" :xs='{span:20,offset:2}'  :sm='{span:18,offset:3}'  :md='{span:18,offset:3}'  :lg='{span:20,offset:2}'  :xlg='{span:16,offset:4}'>                                               
                        <el-row class="r1">
                            <el-col  class="c1" :xs='{span:24,offset:0}' :sm='{span:24,offset:0}' :md='{span:12,push:12,offset:0}' :lg='{span:12,push:12,offset:0}'>
                                <ul class="lf ">
                                    <li class="top2">
                                        <img src="../assets/img/home/yuansu-01.png" alt="" class="img-half-p5"><span class="pcolor3">设备厂商</span>
                                    </li>
                                    <li v-for="(item,index) in r6" :key="index" class="lititle suojin top5vw">
                                        <img src="../assets/img/home/yuansu-02.png" alt="" class="img-half-p5">
                                        <span class="pcolor2">{{item.title}}</span>
                                    </li>
                                    <li  class="lititle suojin ">
                                        <span class="pcolor2 lgfonts">......</span>
                                    </li>
                                    <li class="top5vw">
                                        <img src="../assets/img/home/yuansu-01.png" alt="" class="img-half-p5 "><span class="pcolor3">企业用户</span>
                                    </li>
                                    <li v-for="(itm,idx) in r6s"  class="lititle suojin top5vw">
                                        <img src="../assets/img/home/yuansu-02.png" alt="" class="img-half-p5">
                                        <span class="pcolor2">{{itm.title}}</span>
                                    </li>
                                    <li   class="lititle suojin ">
                                        <span class="pcolor2 lgfonts">......</span>
                                    </li>
                                </ul>
                            </el-col>
                            <el-col  class="c2 lf" :xs='{span:20,offset:2}' :sm='{span:18,offset:3}' :md='{span:12,offset:0,pull:12}' :lg='{span:12,offset:0,pull:12}'>
                                <img src="../assets/img/home/tupian-03.png" alt="" class="img-responsive center-block ">                                
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-main>
        </el-container> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                r5:[
                    {'title':'支持PPPoE、DHCP、WiFi中继、4G外网接入方式，并采用WAN叠加。','color':'color1'},
                    {'title':'点对点私有协议通信，数据传送不经过服务器转发。','color':'color2'},
                    {'title':'数据AES128高级加密，在点对点私有协议基础上密上加密。','color':'color3'},
                    {'title':'以太网、RS232、RS485、USB四种设备接口。','color':'color4'},
                    {'title':'无需公网IP，全球透传，无地域限制。','color':'color5'},
                    {'title':'支持TCP/IP全协议，可以采取任何一种方式数据采集','color':'color6'}, 
                    {'title':'支持OPC UA服务，采集数据可以上传MES、SCADA、ERP等系统。','color':'color7'},                                                           
                ],
                r6:[
                    {'title':'设备出现故障时通过SS700远程排查情况，第一时间提出维修解决方案；'},
                    {'title':'通过预警，参数出现异常及时调整维护，大大降低设备故障率；'},
                    {'title':'维护工程师不再频繁出差，解决问题高效及时，维护成本成千上万倍降低；'},
                    {'title':'更有品牌竞争力，提高终端用户对设备的满意度和信赖度。'}, 
                ],
                r6s:[
                    {'title':'避免设备发生故障造成停产(停工)，影响生产(工程)进度，带来经济损失；'},
                    {'title':'及时获得设备厂商强有力的技术支持。'}, 
                    {'title':'通过OPC实现数据采集、设备维保、生产监控及调控等。'}, 
                ]
            }
        },
    }
</script>

<style scoped>
     .bgcolorf2f2f2{
        background: #f2f2f2;         
     }
     .top5vw{
         margin-top:.5vw;
     }
     .lgfonts{
         font-size: 3rem;
     }
     .lititle.suojin{
         margin-left: 1.5rem;
     }
    .el-main.c-el-padding>.r2>.c2,.el-main.c-el-padding>.r2>.c1{
        margin-top:5rem;
        margin-bottom:1rem;        
    }
    .el-main.c-el-padding>.r3{
        background:#e0e0e1;
    }
    .el-main.c-el-padding>.r4{
        padding-top:3vw;
        padding-bottom:8rem;
    }
    .el-main.c-el-padding>.r4>.c1>.r1>.c2,.el-main.c-el-padding>.r4>.c1>.r1>.c3{
        margin-top:5rem;
    }
    .el-main.c-el-padding>.r5{
        background:#d8effc;
    }
    .el-main.c-el-padding>.r5>.c1>.r1>.c1{
        padding-top:5rem;
    }
    .el-main.c-el-padding>.r6>.c1>.r2>img{
        margin-top:20rem; 
        margin-bottom:5rem;                                                   
    }
    .el-main.c-el-padding>.r5>.c1>.r1>.c2>img{
        margin-top:10%;  
        margin-bottom:5rem;                                     
    }
    .el-main.c-el-padding>.r5>.c1>.r1>.c2>ul>li{
        margin-bottom: .5vw;
    }
    .el-main.c-el-padding>.r5>.c1>.r1>.c3{
        margin-top:6%;
        margin-bottom:10%;  
    }
    .el-main.c-el-padding>.r6>.c1{
        padding-top:5rem;
    }
    .el-main.c-el-padding>.r6 .c1 .img-half-p5{
        line-height:5vw;
    }
    .el-main.c-el-padding>.r2>.c2>p{
        font-size: 1.2vw;
        font-weight: 400
    }
    .spancolor1{
        color:#00a0e9;
        font-size: 1.2vw;
    }
    .spancolor2{
        color:#ee7908;
        font-size: 1.2vw;
    }
    .pcolor2{
        font-size: 1.2vw;
        color:#727171;
    }
    .pcolor3{
        font-size: 1.2vw;
        color:#727171;
    }
    .xuanzhuan{
        animation:xuanzhuan 60s linear infinite; 
    }
    .lititle{
        margin-left:0%;
    }
    .color1,.color2,.color3,.color4,.color5,.color6,.color7{
       font-size: 1.2vw;
    }
    .color1{
       color:#f29c0d;        
    }
    .color2{
       color:#00a0e9;        
    }
    .color3{
       color:#009944;        
    }
    .color4{
       color:#4bbba0;        
    }
    .color5{
       color:#a48b77;        
    }
    .color6{
        color:#d70050;
    }
    .color7{
        color:#20238a;
    }
    @media screen and ( max-width:767px) {
       
        .el-main.c-el-padding>.r2>.c1{
            margin-top:1rem;            
        }
        .el-main.c-el-padding>.r2>.c2{
            margin-top:.1rem;
        }
        .el-main.c-el-padding>.r4>.c1>.r1>.c2,.el-main.c-el-padding>.r4>.c1>.r1>.c3{
            margin-top:1.6vw;
        }
        .el-main.c-el-padding>.r4{
            padding-top:3vw;
            padding-bottom:2.7rem;
        }
        .el-main.c-el-padding>.r4>.c1>.r1>.c2{
            margin-top:1rem;
        }
        .el-main.c-el-padding>.r2>.c2>p{
            font-size: 1rem;
        }
        .spancolor1{
            font-size: 1.2rem;
        }
        .pcolor2{
            font-size: 1rem;
        }
        .pcolor3{
            font-size: 1.6vw;
        }
        .color1,.color2,.color3,.color4,.color5,.color6,.color7{
            font-size: 1rem;
        }
        .el-main.c-el-padding>.r5>.c1>.r1>.c1{
            padding-top:1.6vw;
        }
        .el-main.c-el-padding>.r5>.c1>.r1>.c2{
            margin-top:3vw;
        }
        .el-main.c-el-padding>.r6>.c1>.r2>img{
            margin-top:3vw; 
            margin-bottom:1.6vw;                                   
        }
        .el-main.c-el-padding>.r5>.c1>.r1>.c2>img{
            margin-top:3vw;
            margin-bottom:1.6vw;                
        }
        .lgfonts{
            font-size: 2rem;
        }
    }
    @media screen and ( min-width:768px) and (max-width:1540px) {
       .el-main.c-el-padding>.r2>.c1{
           margin-top:1rem;            
       }
       .el-main.c-el-padding>.r2>.c2{
           margin-top:.1rem;
       }
       .el-main.c-el-padding>.r4>.c1>.r1>.c2,.el-main.c-el-padding>.r4>.c1>.r1>.c3{
           margin-top:1.6vw;
       }
       .el-main.c-el-padding>.r4{
           padding-top:3vw;
           padding-bottom:2.7rem;
       }
       .el-main.c-el-padding>.r4>.c1>.r1>.c2{
           margin-top:1rem;
       }
       .el-main.c-el-padding>.r2>.c2>p{
           font-size: 1rem;
       }
       .spancolor1{
           font-size: 1.2rem;
       }
       .pcolor2{
           font-size: 1rem;
       }
       .pcolor3{
           font-size: 1.6vw;
       }
       .color1,.color2,.color3,.color4,.color5,.color6,.color7{
           font-size: 1.2vw;
       }
       .el-main.c-el-padding>.r5>.c1>.r1>.c1{
           padding-top:1.6vw;
       }
       .el-main.c-el-padding>.r5>.c1>.r1>.c2{
           margin-top:3vw;
       }
       .el-main.c-el-padding>.r6>.c1>.r2>img{
           margin-top:3vw; 
           margin-bottom:1.6vw;                                   
       }
       .el-main.c-el-padding>.r5>.c1>.r1>.c2>img{
           margin-top:3vw;
           margin-bottom:1.6vw;                
       }
       .el-main.c-el-padding>.r2>.c2>p{
            font-size: 1.2vw;
            font-weight: 400
        }
        .spancolor1{
            font-size: 1.2vw;
        }
        .spancolor2{
            font-size: 1.2vw;
        }
        .pcolor2{
            font-size: 1.2vw;
        }
        .pcolor3{
            font-size: 1.2vw;
        }
        .lgfonts{
            font-size: 2rem;
        }
        .el-main.c-el-padding>.r6>.c1>.r2>img{
            margin-top:5rem; 
            margin-bottom:5rem;                                                   
        }
        .el-main.c-el-padding>.r5>.c1>.r1>.c2>img{
            margin-top:5rem;  
            margin-bottom:5rem;                                     
        }
        .el-main.c-el-padding>.r5>.c1>.r1>.c3>ul{
            line-height:3vw;
            margin-top:5rem;  
        }
        
   }
</style>