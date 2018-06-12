<template>
    <div>
        <!-- 右侧导航栏 -->                
        <el-aside  class="rf rightaside " v-if="shownav" style="position: fixed">
            <ul >
                <li v-for="(item,index) in rightnavs">
                    <router-link :to="item.path">
                        <img class="img-half-4 r-pic  center-block" :src="require('../assets/'+item.pic)" alt="" >
                        <p class="text-center fontwords" >{{item.names}}</p>
                    </router-link>
                    <!-- SS700界面的教程rightnavs.length>限制SS700下独有-->
                    <ul v-if="index==0&&rightnavs.length>4" class="SS700teach">
                        <li><a href="static/第1章  使用前的准备工作.html" target='_blank'>使用前的准备工作</a></li>
                        <li><a href="static/第2章  设备物理连接.html" target='_blank'>设备物理连接</a></li>
                        <li><a href="static/第3章  在模块管理后台绑定SS700及添加设备.html" target='_blank'>在模块管理后台绑定SS700及添加设备</a></li>
                        <li><a href="static/第4章  云管理平台使用指南.html" target='_blank'>云管理平台使用指南</a></li>
                    </ul>
                </li>
            </ul>
        </el-aside>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                shownav:true,
                rightnavs:[],
            }
        }
    }
</script>

<style scoped>
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
     /* SS700教程 */
     .SS700teach{
        position: fixed;
        top:55px;
        right:6%;
        width:8%;
        padding:.3vw;
        text-align: right;
        background:rgba(255, 255,255,.6);
        display: none;
    }
    .SS700teach li:not(:nth-child(1)){
        margin-top:5%;
        display:block;
    }
    .SS700teach li a{
        color:#828181 !important;
        font-size:.8vw;
    }
    .SS700teach li a:hover{
        color:#1296db !important;
    }
    .rightaside>ul>li:hover .SS700teach{
        display: block;
    }
    .SS700teach:hover{
        display: block;
    }
    .r-pic{
        max-width: 40%;
    }
    .r-pic:hover{
        animation: myrotate .5s linear  1 alternate;
    }
</style>