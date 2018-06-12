<template>
    <div>
        <el-container>
            <!-- 智能工厂 -->
            <el-main class="c-el-padding ">
                <el-row class="r1 ">
                    <el-col>
                        <img src="../assets/img/zhineng/zhutitu.png" alt="" class="img-responsive center-block" style="width:100vw;">
                    </el-col>
                </el-row>
                <el-row class="r2  bottom5">
                    <el-col class=" " :xs='{span:20,offset:2}' :sm='{span:18,offset:3}' :md='{span:16,offset:4}' :lg='{span:14,offset:5}'
                        :xlg='{span:12,offset:6}'>
                        <img src="../assets/img/zhineng/kunhuo-01.png" alt="" class="img-responsive center-block">
                    </el-col>
                </el-row>
                <el-row class="r3 pdbtm5" >
                    <!-- 居中标题图片 -->
                    <el-col class="top5 " :xs='{span:12,offset:6}' :sm='{span:10,offset:7}' :md='{span:8,offset:8}' :lg='{span:8,offset:8}' :xlg='{span:8,offset:8}'>
                        <img src="../assets/img/zhineng/biaoti-01.png" alt="" class="img-responsive center-block">
                    </el-col>
                    <el-col class=" " :xs='{span:20,offset:2}' :sm='{span:18,offset:3}' :md='{span:16,offset:4}' :lg='{span:16,offset:4}' :xlg='{span:12,offset:6}'>
                        <p class="pfont text-center">
                            SS700提供与<span class="spanfont">MES、SCADA、ERP</span>等上层管理软件<span class="spanfont">信息系统</span>的<span class="spanfont">接口；</span><br>
                            通过<span class="spanfont">OPC UA</span>采集数据，提取信息并分析对生产进行指导；<br>
                            实现从库存、订单管理到指令下发、流水线生产的一体化智能管理……
                        </p>
                    </el-col>
                </el-row>
                <el-row class="r4  pdbtm5" style="background:#e7f5fd;">
                    <el-col class="top5 " :xs='{span:12,offset:6}' :sm='{span:10,offset:7}' :md='{span:8,offset:8}' :lg='{span:8,offset:8}' :xlg='{span:8,offset:8}'>
                    </el-col>
                    <el-col class=" " :xs='{span:20,offset:2}' :sm='{span:18,offset:3}' :md='{span:16,offset:4}' :lg='{span:14,offset:5}' :xlg='{span:12,offset:6}'>
                        <p class="pfont text-center bottom5">
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
                                <img src="../assets/img/zhineng/zngc-01.png" alt="" class="img-responsive center-block">
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