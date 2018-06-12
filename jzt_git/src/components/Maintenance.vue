<template>
    <div>
        <el-container>
            <!-- 设备维保 -->
            <el-main class="c-el-padding ">
                <el-row class="r1 bottom5">
                    <el-col>
                        <img src="../assets/img/shebei/zhutitu.png" alt="" class="img-responsive center-block" style="width:100vw;">
                    </el-col>
                </el-row>
                <el-row class="r2 top5 bottom5">
                    <el-col class="top5 " :xs='{span:20,offset:2}' :sm='{span:16,offset:4}' :md='{span:12,offset:6}' :lg='{span:12,offset:6}'
                        :xlg='{span:12,offset:6}'>
                        <img src="../assets/img/shebei/weni-01.png" alt="" class="img-responsive center-block">
                    </el-col>
                </el-row>
                <el-row class="r3 pdbtm5" style="background:#e7f5fd;">
                    <!-- 居住标题图片 -->
                    <el-col class="top5 " :xs='{span:12,offset:6}' :sm='{span:10,offset:7}' :md='{span:8,offset:8}' :lg='{span:8,offset:8}' :xlg='{span:8,offset:8}'>
                        <img src="../assets/img/shebei/biaoti-01.png" alt="" class="img-responsive center-block">
                    </el-col>
                    <el-col class=" " :xs='{span:20,offset:2}' :sm='{span:18,offset:3}' :md='{span:16,offset:4}' :lg='{span:14,offset:5}' :xlg='{span:12,offset:6}'>
                        <p class="pfont text-center hline2-2">
                            <span class="spanfont">全球透传，无地域限制！</span>
                            <br> 通过上位机软件
                            <span class="spanfont">远程在线编程调试</span>和
                            <span class="spanfont">管理监控数据</span>。
                            <br>而且，通过
                            <span class="spanfont">预警</span>能第1时间获知设备异常状况，
                            <br>对
                            <span class="spanfont">设备维护更加主动</span>和
                            <span class="spanfont">及时</span>。
                        </p>
                        <el-row>
                            <el-col :span="20" :offset="2">
                                <img src="../assets/img/shebei/jjfa-01.png" alt="" class="img-responsive center-block">
                            </el-col>
                        </el-row>  
                    </el-col>
                </el-row>
                <el-row class="r3 bottom5">
                    <el-col class="top5 " :xs='{span:12,offset:6}' :sm='{span:10,offset:7}' :md='{span:8,offset:8}' :lg='{span:8,offset:8}' :xlg='{span:8,offset:8}'>
                        <img src="../assets/img/shebei/biaoti-02.png" alt="" class="img-responsive center-block">
                    </el-col>
                    <el-col class=" " :xs='{span:20,offset:2}' :sm='{span:18,offset:3}' :md='{span:16,offset:4}' :lg='{span:14,offset:5}' :xlg='{span:12,offset:6}'>
                        <p class="pfont text-center hline2-2">
                            支持
                            <span class="spanfont">OPC UA</span>服务，为MES、SCADA等系统
                            <span class="spanfont">提供数据采集的接口，</span>
                            <br> 维保工程师通过数据分析，可以
                            <span class="spanfont">在线</span>对设备进行
                            <span class="spanfont">远程维护，</span>
                            <br> 或者
                            <span class="spanfont">确定设备零部件的更换。</span>
                        </p>
                        <el-row>
                            <el-col :span="20" :offset="2">
                                <img src="../assets/img/shebei/jjfa-02.png" alt="" class="img-responsive center-block">
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

    }
</script>

<style scoped>
</style>