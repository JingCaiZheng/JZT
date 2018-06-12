<template>
    <div>
        <!--网络棒使用 -->
        <Teach ref="myTeach"></Teach>
    </div>
</template>

<script>
    import Teach from './Teach.vue'
    export default {
        components:{
            Teach
        },
        data() {
            return {
                topwords:'本教程介绍如何通过私有云网络棒来搭建移动办公平台，连接访问以电脑客户端为例，手机APP基本相同，这里不作阐述：',
                toppic:'img/jzt/teach/bar/wlbjcbt-01.png',
                info1:null,
                words:[
                    {
                        'steptitle':'一、设备连接',
                        'stepdetails':[
                            {
                                'numpic':'img/jzt/teach/01.png',
                                'step':'将网络棒的电源适配器插在电源插座上，让网络棒运行起来。',
                            },
                            {
                                'numpic':'img/jzt/teach/02.png',
                                'step':'通过网线将网络棒的网口和现有路由器的 Lan口连在一起。',
                                'steppic':'img/jzt/teach/bar/wlbjcpt-05.png',
                            },
                        ],
                        'info':'注意：网络棒启动一般需要 1分钟左右，在工作指示蓝灯亮起之后，说明私有云网络棒已经开始正常工作。',
                    },
                    {
                        'steptitle':'二、用户绑定及客户端/APP下载',
                        'stepdetails':[
                            {
                                'numpic':'img/jzt/teach/01.png',
                                'step':'无线连接网络棒的 WiFi热点“GQ_XXXXXX”（“XXXXXX”为 MAC后 6位），初始密码为 12345678。',
                            },
                            {
                                'numpic':'img/jzt/teach/02.png',
                                'step':`用浏览器访问 10.213.44.1，用微信扫一扫显示的二维码，进行用户绑定（第一次扫描的微信用户为管理员），
                                        其他用户同样用微信扫一扫进行绑定，此时，管理员的微信将收到一个授权登录请求。`,
                                'steppic':'img/jzt/teach/bar/wlbjcpt-02.png',
                            },
                            {
                                'numpic':'img/jzt/teach/03.png',
                                'step':'访问本网站“服务与下载”进行客户端下载，下载对应的电脑客户端并安装。',
                                'steppic':'img/jzt/teach/bar/wlbjcpt-03.png',
                            },
                            {
                                'numpic':'img/jzt/teach/04.png',
                                'step':`客户端完成后，双击Windows桌面的极智通，点击“开始认证”，将显示一个二 维码，
                                        此时用您的手机微信扫一扫，就将显示在第一步绑定的极路由了。小编在 “温州分部”这个节点上右键点击，
                                        然后连接，当状态显示“已连接”时，这台 Windows电脑就已经连到公司内部网络中去了。`,
                                'steppic':'img/jzt/teach/bar/wlbjcpt-04.png',
                            },
                        ],
                        'info':'移动办公平台搭建完成。此时您可以像在办公室一样，访问公司内部的各种OA、 CRM、ERP等系统，也可以访问文件共享服务器，打印机等资源。',
                    }
                ],
            }
        },
        mounted(){
            this.$refs.myTeach.words=this.words;
            this.$refs.myTeach.topwords=this.topwords;
            this.$refs.myTeach.toppic=this.toppic;
            this.$refs.myTeach.info1=this.info1;
        }
    }
</script>

<style scoped>
    
</style>