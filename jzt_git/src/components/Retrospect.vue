<template>
    <div>
        <!-- 产品追溯 -->
        <el-container class="c-el-padding">
             <!-- 第一层 -->
            <el-main class="c-el-padding">
                <el-row class="r1">
                    <el-col class="c1">
                        <img src="../assets/img/zhuisu/zsxtztt-01.png" alt="" class="img-responsive center-block">
                    </el-col>
                </el-row> 
                <!-- 第二层 -->
                <el-row class="r2 ">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="pdtop5 bottom5 pdbtm5">
                            <el-col :span="12" :offset="6">
                                <img src="../assets/img/zhuisu/zsxtbt-01.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col :span="22" :offset="1" class="bottom5">
                                <div class="text-index top5 fontwords"> 
                                    系统通过本公司开发的SS700智能远程模块（简称：SS700）实现数据采集和追溯代码录入。追溯可以贯穿供应商、原料信息及生产各工序环节，实现各工序的防错、工艺监控，确保产品制程的稳定、透明与可追溯性。<br></div>
                                <div class="text-index  fontwords">系统通过现场物料、设备、生产计划、电子签名等等数据联动分析反馈，实现设备自适应、提升生产效率、降低综合成本，同时也实现生产精益化、管理效能最大化。</div>
                            </el-col>
                            <el-col :span="18" :offset="3">
                                <img src="../assets/img/zhuisu/zsxtpt-01.png" alt="" class="img-responsive center-block">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <!-- 第三层 -->
                <el-row class="r3" style="background:#e5f4fc">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="pdtop5 bottom5 pdbtm5">
                            <el-col :span="12" :offset="6">
                                <img src="../assets/img/zhuisu/zsxtbt-02.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col :span="23" :offset="1" class="bottom5 top5">
                                <ul>
                                    <li v-for="(item,index) in r3list" :key="index" class="center-block top2">
                                        <img :src="require('../assets/'+item.pic)" alt="" class="img-half-p5 lf clear"><div class="left2"><span class="bigfontwords ">{{item.title}}</span><span class="fontwords">{{item.words}}</span></div>
                                    </li>
                                </ul>
                            </el-col>
                            <el-col :span="18" :offset="3">
                                <img src="../assets/img/zhuisu/zsxtpt-02.png" alt="" class="img-responsive center-block">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                 <!-- 第四层 -->
                 <el-row class="r4" >
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="pdtop5 bottom5">
                            <el-col :span="12" :offset="6">
                                <img src="../assets/img/zhuisu/zsxtbt-03.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col :span="18" :offset="3" class="top5">
                                <img src="../assets/img/zhuisu/zsxtpt-03.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col :span="23" :offset="1" class="bottom5 top5">
                                <ul>
                                    <li v-for="(item,index) in r4list" :key="index" class="center-block top2">
                                        <img :src="require('../assets/'+item.pic)" alt="" class="img-half-p5 lf clear"><div class="left1"><span class="bigfontwords ">{{item.title}}</span><span class="fontwords">{{item.words}}</span></div>
                                    </li>
                                </ul>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                 <!-- 第五层 -->
                <el-row class="r5" style="background:#e5f4fc">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="pdtop5 bottom5">
                            <el-col :span="12" :offset="6">
                                <img src="../assets/img/zhuisu/zsxtbt-04.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col :span="23" :offset="1" class="bottom5 top5">
                                <ul>
                                    <li v-for="(item,index) in r5list" :key="index" class="center-block top2">
                                        <img :src="require('../assets/'+item.pic)" alt="" class="img-half-p5 lf clear"><div class="left1"><span class="bigfontwords ">{{item.title}}</span><span class="fontwords">{{item.words}}</span></div>
                                    </li>
                                </ul>
                            </el-col>
                            <el-col :span="18" :offset="3" class="bottom5">
                                    <img src="../assets/img/zhuisu/zsxtpt-04.png" alt="" class="img-responsive center-block">
                                </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                 <!-- 第六层 -->
                <el-row class="r6">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}" >
                        <el-row class="pdtop5 ">
                            <el-col :span="12" :offset="6">
                                <img src="../assets/img/zhuisu/zsxtbt-05.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col :span="18" :offset="3" class="bottom5 top5">
                                <img src="../assets/img/zhuisu/zsxtpt-05.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col :span="23" :offset="1" class="bottom5 pdbtm5">
                                <ul>
                                    <li v-for="(item,index) in r6list" :key="index" class="center-block top2">
                                        <img :src="require('../assets/'+item.pic)" alt="" class="img-half-p5 lf clear"><div class="left1"><span class="bigfontwords ">{{item.title}}</span><span class="fontwords">{{item.words}}</span></div>
                                    </li>
                                </ul>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                 <!-- 第七层 -->
                 <el-row class="r7" style="background:#e5f4fc">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="pdtop5 bottom5">
                            <el-col :span="12" :offset="6" >
                                <img src="../assets/img/zhuisu/zsxtbt-06.png" alt="" class="img-responsive center-block">
                            </el-col>
                            <el-col :span="23" :offset="1" class="bottom5 top5">
                                <ul>
                                    <li v-for="(item,index) in r7list" :key="index" class="center-block top2">
                                        <img :src="require('../assets/'+item.pic)" alt="" class="img-half-p5 lf clear"><div class="left1"><span class="bigfontwords ">{{item.title}}</span><span class="fontwords">{{item.words}}</span></div>
                                    </li>
                                </ul>
                            </el-col>
                            <el-col :span="18" :offset="3" class="bottom5 pdbtm5">
                                <img src="../assets/img/zhuisu/zsxtpt-06.png" alt="" class="img-responsive center-block">
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
                r3list:[
                    {'words':'追溯生产工作前，扫码枪连入SS700追溯代码通过扫码录入。','title':'追溯代码录入:','pic':'img/zhuisu/zsxtys-01.png'},
                    {'words':'扫码之后，如果录入的追溯代码是正确的，SS700就会通过状态位告知PLC对追溯生产工序发出工作指令（如果代码错误系统则通过预警告知）。','title':'系统智能化:','pic':'img/zhuisu/zsxtys-02.png'},
                    {'words':'追溯生产工序工作完成后，SS700会通过状态位获知PLC是否完成数据采集，采集完成时数据会自动上传系统。','title':'系统自动化:','pic':'img/zhuisu/zsxtys-03.png'},
                    
                ],
                r4list:[
                    {'words':'产品追溯信息自定义，根据需求设定，操作方便。','title':'追溯信息自定义:','pic':'img/zhuisu/zsxtys-04.png'},
                    {'words':'利用可变的二维码或条形码技术，实现一物一码，为产品建立唯一性的“身份证”。','title':'代码唯一性:','pic':'img/zhuisu/zsxtys-04.png'},
                    {'words':'追溯代码由数字、分隔符、空格、字母组成，根据实际需求自定义组合标识规则。','title':'代码规则自定义:','pic':'img/zhuisu/zsxtys-04.png'},
                ],
                r5list:[
                    {'words':'根据需求自由建立产线，指定产品标识灵活机动；同一产线下可以随意建立多个工序，无数量限制。','title':'灵活管理:','pic':'img/zhuisu/zsxtys-04.png'},
                    {'words':'每道工序根据需求自由设置追溯数据采集点，无数量限制。','title':'数据采集自定义:','pic':'img/zhuisu/zsxtys-04.png'},
                ],
                r6list:[
                    {'words':'产品没有扫码或者追溯代码录入错误时，后续产品追溯生产工序的设备无法启动并产生预警提示，从追溯源头杜绝错误发生。','title':'从追溯源头杜绝错误:','pic':'img/zhuisu/zsxtys-04.png'},
                ],
                r7list:[
                    {'words':'访问追溯系统可以查询各类产品追溯信息。比如：产品合格情况、追溯数据的状态值、整体合格率等。','title':'电脑追溯查询:','pic':'img/zhuisu/zsxtys-04.png'},
                    {'words':'追溯生产工序工作完成数据上传系统后，可以通过手机微信扫码查询产品的公开信息(条形码不能进行手机查询)。','title':'手机扫码追溯查询:','pic':'img/zhuisu/zsxtys-04.png'},
                ],
            }
        },
    }
</script>

<style scoped>
    .text-index{
        text-indent: 2em;
    }
    .bigfontwords{
        font-size: 2vw;
        font-weight: 500;
        color:#000;
    }
    @media screen and (max-width:768px){
        .bigfontwords{
            font-size: 1.8vw;
        }
    }
</style>