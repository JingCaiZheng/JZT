<template>
    <div>
        <!-- 教程模板 -->
        <el-container class="c-el-padding">
            <el-main class="c-el-padding">
                <el-row class="r1 topbgcolor">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="top2 bottom2 ">
                            <el-col :span="15">
                                <!-- 如果存在头部图标 -->
                                <img v-if="toppic" :src="require('../assets/'+toppic)" alt="" class="img-half-8 center-block ">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="r2 bottom5">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="top5 ">
                            <el-col :span="22" :offset="1">
                                <p class="teachwords suojin">{{topwords}}</p>
                                <!-- 头部如果存在蓝色提示 -->
                                <p v-if="info1" class="infowords top2 suojin">{{info1}}</p>
                            </el-col>
                        </el-row>
                        <el-row v-for="(item,index) in words" :key="index" class="top2 bottom2">
                            <el-col :span="22" :offset="1">
                                <el-row>
                                    <el-col class="left5">
                                        <p class="stepwords">{{item.steptitle}}</p>
                                        <div v-for="(itm,idx) in item.stepdetails" :class="{top2:idx!=0}">
                                            <img v-if="itm.numpic" :src="require('../assets/'+itm.numpic)" alt="" class="img-half-p8">
                                            <span class="lteachwords" v-if="itm.step">{{itm.step}}</span>
                                            <el-row v-if="itm.steppic">
                                                <el-col :span="20" :offset="2">
                                                    <img :src="require('../assets/'+itm.steppic)" alt="" class="img-responsive center-block top2 bottom2">
                                                </el-col>
                                            </el-row>
                                            <!-- 如果存在 小结部分 -->
                                            <el-row v-if="itm.talk">
                                                <el-col :span="24" :offset="0">
                                                    <div class="teachwords top2">{{itm.talk.title}}</div>
                                                    <el-row class=" top5">
                                                        <el-col :span="4" :offset="1"><img :src="require('../assets/'+itm.talk.talkpic1)" alt="" class="img-responsive"></el-col>
                                                        <el-col class=" teachwords top5 font1-2" >{{itm.talk.title2}}</el-col>
                                                        <el-col class="suojin top2">
                                                            <p class="infowords">{{itm.talk.A}}</p>
                                                            <p class="lteachwords">{{itm.talk.a1}}</p>
                                                            <p class="lteachwords">{{itm.talk.a2}}</p>
                                                            <p class="infowords">{{itm.talk.B}}</p>
                                                            <p class="lteachwords">{{itm.talk.b1}}</p>
                                                            <p class="lteachwords">{{itm.talk.b2}}</p>
                                                        </el-col>
                                                    </el-row>
                                                    <el-row class=" top5">
                                                        <el-col :span="4" :offset="1"><img :src="require('../assets/'+itm.talk.talkpic2)" alt="" class="img-responsive"></el-col>
                                                        <el-col class=" teachwords top5 font1-2" >{{itm.talk.nextwords}}</el-col>
                                                    </el-row>
                                                </el-col>
                                            </el-row>
                                            <!-- 小结部分 -->
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col>
                                        <!-- 尾部提示 -->
                                        <p class="infowords top2 suojin">{{item.info}}</p>
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
    export default {
        data() {
            return {
                words: null,
                topwords:null,
                toppic:null,
                info1:null,
            }
        },
    }
</script>

<style scoped>
     .topbgcolor {
        background: #eeefef;
    }
</style>