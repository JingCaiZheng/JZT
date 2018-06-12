<template>
    <div>
        <!-- 产品追溯 -->
        <el-container class="c-el-padding">
             <!-- 第一层 -->
            <el-main class="c-el-padding">
                <el-row class="r1">
                    <el-col class="c1">
                        <img src="../assets/img/jzt/ydbgddt-01.png" alt="" class="img-responsive center-block" style="width:100vw">
                    </el-col>
                </el-row> 
                <!-- 第二层 -->
                <el-row class="r2 ">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="pdtop5 bottom5 pdbtm5">
                            <el-col :span="8" :offset="8">
                                <img src="../assets/img/jzt/pfeatures/cptedbt-01.png" alt="" class="img-responsive center-block ">
                            </el-col>
                            <el-col>
                                <el-row>
                                    <el-col :span="8" class="pd5" v-for="(item,index) in introlist" :key="index">
                                        <img :src="require('../assets/'+item.pic)" alt="" class="img-half-3 center-block pdbtm5 animates">
                                        <img :src="require('../assets/'+item.pic2)" alt=""class="img-responsive center-block top5">
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <!-- 第三层循环层 -->
                <el-row :class="['r2',{bgcolor:index%2==0}]"  v-for="(item,index) in floor" :key="index">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="pdtop5 bottom5 pdbtm5">
                            <el-col :span="10" :offset="7">
                                <img :src="require('../assets/'+item.toppic)" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col class="top2" :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}">
                                <p class="fontwords">{{item.title}}</p>
                            </el-col>
                            <el-col class="" :xs="{span:16,offset:4}" :sm="{span:16,offset:4}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                                <img :src="require('../assets/'+item.btmpic)" alt="" class="img-responsive center-block">
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
                introlist:[
                    {'pic':'img/jzt/pfeatures/cptddtb-01.png','pic2':'img/jzt/pfeatures/cptddwz-01.png'},
                    {'pic':'img/jzt/pfeatures/cptddtb-02.png','pic2':'img/jzt/pfeatures/cptddwz-02.png'},
                    {'pic':'img/jzt/pfeatures/cptddtb-03.png','pic2':'img/jzt/pfeatures/cptddwz-03.png'},
                    {'pic':'img/jzt/pfeatures/cptddtb-04.png','pic2':'img/jzt/pfeatures/cptddwz-04.png'},
                    {'pic':'img/jzt/pfeatures/cptddtb-05.png','pic2':'img/jzt/pfeatures/cptddwz-05.png'},
                    {'pic':'img/jzt/pfeatures/cptddtb-06.png','pic2':'img/jzt/pfeatures/cptddwz-06.png'},
                ],
                floor:[
                    {'title':'使用极智通后，不需要公网IP，（哪些允许访问可以经过权限设置）在外网可以轻松访问内网OA、ERP、HR等系统，也可以访问服务器共享文件夹、共享打印机等……','toppic':'img/jzt/menu/qsfwbt-01.png','btmpic':'img/jzt/menu/qsfwnwpt-01.png'},
                    {'title':'云盘关闭给许多人带来无尽烦恼，如果资料存在自家服务器（如NAS、电脑等）里，让极智通实现随时随地取用，那就是安全可靠的加密私有云盘！','toppic':'img/jzt/menu/yysyypbt-01.png','btmpic':'img/jzt/menu/yysyyppt-01.png'},
                    {'title':'打破空间、时间束缚，随时随地办公；审批、文件管理、考勤、会议灵活处理；可以 远程修改文件、打印等……','toppic':'img/jzt/menu/ydbgcj-02.png','btmpic':'img/jzt/menu/ydbgcj-01.png'},
                    {'title':'公司总部和分部在不同城市，如果想组建资料共享、实现互访的“异地局域网”，可 以通过极智通将不同地方的极路由互联起来就能实现。','toppic':'img/jzt/menu/ydzwcj-01.png','btmpic':'img/jzt/menu/ydzwcj-02.png'},
                ]
            }
        },
    }
</script>

<style scoped>
    .animates:hover{
        animation: doudong .5s linear 0s 1 alternate;
        cursor:pointer;
    }
    .text-index{
        text-indent: 2em;
    }
    .bigfontwords{
        font-size: 2vw;
        font-weight: 500;
        color:#000;
    }
    .pd5{
        padding:6%;
    }
    .bgcolor{
        background:#e4f2f9;
    }
    @media screen and (max-width:768px){
        .bigfontwords{
            font-size: 1.8vw;
        }
    }
</style>