<template>
    <div>
        <el-container>
            <!-- 云管理 -->
            <el-main class="c-el-padding">
                <el-row class="r1 bottom5">
                    <el-col>
                        <img src="../assets/img/yun/yglzt-01.png" alt="" class="img-responsive center-block" style="width:100vw;">
                    </el-col>
                    <!-- 标题通用样式 -->
                    <el-col class=" " :xs='{span:12,offset:6}' :sm='{span:10,offset:7}' :md='{span:8,offset:8}' :lg='{span:8,offset:8}' :xlg='{span:8,offset:8}'>
                        <!-- <el-col :xs='{span:8,offset:8}' :sm='{span:8,offset:8}' :md='{span:8,offset:8}' :lg='{span:8,offset:8}' :xlg='{span:8,offset:8}'> -->
                        <a href="https://www.jzt2025.com">
                            <img src="../assets/img/yun/yunguanli.png" alt="" class=" yun center-block top5 imgscale">
                        </a>
                    </el-col>
                </el-row>
                <el-row class="r2 top5 bottom5">
                    <el-col class="bottom5 " :xs='{span:20,offset:2}' :sm='{span:18,offset:3}' :md='{span:16,offset:4}' :lg='{span:14,offset:5}'
                        :xlg='{span:12,offset:6}'>
                        <!-- <el-col :span="12" :offset="6"> -->
                        <img src="../assets/img/yun/yalbt-01.png" alt="" class="img-half-6 center-block ">
                        <p class="pfont ">
                            极智通2025云管理平台是
                            <span class="spanfont">远程管理设备的平台， 无需安装客户端，访问<a class="pfont " href="http://www.jzt2025.com">http://www.jzt2025.com</a>即可进入，
                            </span>
                            操作非常简单，
                            <span class="spanfont">无需IT知识就能学会。</span>
                        </p>
                        <img src="../assets/img/yun/yglpt-01.png" alt="" class="img-responsive center-block ">
                        <p class="pfont text-center">
                            通过云管理平台，
                            <br> 同一台设备可供多人同时访问，在平台上可以进行远程在线编程调试、远程管理监控数据、数据采集、预警编辑、远程监控等等工作！
                        </p>
                        <img src="../assets/img/yun/yglpttp-01.png" alt="" class="img-responsive center-block ">
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .yun{
        max-width:40%;
    }
</style>