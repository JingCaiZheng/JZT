<template>
        <div>
            <!-- 招贤纳士 -->
            <el-container class="c-el-padding">
                <el-main class="c-el-padding bgfff">
                    <el-row class="r2 ">
                        <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                            <el-row class="pdtop5 bottom5 pdbtm5">
                                <el-col>
                                    <img src="../assets/img/recruit/zppt-01.png" alt="" class="img-half-8 center-block">
                                    <img src="../assets/img/recruit/zpbt-01.png" alt="" class="img-half-6 center-block top5">
                                </el-col>
                            </el-row>
                            <el-row class="bottom5 pdbtm5 ">
                                <el-col>
                                    <span class="joinword">加入羽智,请将简历发送至: <a class="joinword" href="mailto:2353473790@qq.com">2353473790@qq.com</a> </span>
                                </el-col>
                                <el-col class="top5" v-for="(item,index) in recruit" :key="index">
                                    <p class="recruitword">{{item.title}}</p>
                                    <div v-if="item.details" v-for="(itm,idx) in item.details" :key="idx" class="srecruitword">
                                        {{itm.item}}
                                    </div>
                                </el-col>
                                <el-col class="top5 pdtop5">
                                    <span class="recruitword">
                                        联系方式：
                                        <a class="recruitword" href='tel:0571-88583071'>0571-88583071</a>
                                        &nbsp;&nbsp;&nbsp;
                                        <a class="recruitword "  href='tel:13738170029'>13738170029</a>&nbsp;(金先生)
                                    </span>
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
                    recruit:[
                        {
                            'title':'一、招聘人数: 5名',
                        },
                        {
                            'title':'二、岗位职责:',
                            'details':[
                                {'item':'负责公司软件产品的设计和开发。'},
                            ]
                        },
                        {
                            'title':'三、岗位要求：',
                            'details':[
                                {'item':'1、擅长C#、.Net、wpf。'},
                                {'item':'2、有开发经验者优先。'},
                                {'item':'3、大专及以上学历，计算机、软件、通信等相关专业。'},
                            ]
                        },  
                        {
                            'title':'四、福利：',
                            'details':[
                                {'item':'1、员工餐厅供应午餐。'},
                                {'item':'2、五险齐全，社保体系完善。'},
                                {'item':'3、处于业界较高水平的薪资待遇。'},
                                {'item':'4、五天工作制，带薪假期（年假、病假、婚假、产假）。'},
                            ]
                        },
                    ]
                }
            },
        }
    </script>
    
    <style scoped>
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
        .joinword{
            font-size:2.5vw;
            color:#67b6cd;
            font-weight: bold;
        }
        .joinword:hover{
            text-decoration:none;
        }
        .recruitword{
            color:#797979;
            font-size: 1.8vw;
        }
        .srecruitword{
            color:#797979;
            font-size: 1.5vw;
        }
    </style>