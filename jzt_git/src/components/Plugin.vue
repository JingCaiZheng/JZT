<template>
    <div>
        <!--插件安装使用 -->
        <Teach ref="myTeach"></Teach>
    </div>
</template>

<script>
    import Teach from './Teach.vue'
    export default {
        components: {
            Teach
        },
        data() {
            return {
                topwords: '本教程介绍如何在极路由安装极智通来搭建移动办公平台，连接访问以电脑客户端 为例，手机APP基本相同，这里不作阐述：',
                toppic: 'img/jzt/teach/plugin/jlydjtpdbt.png',
                info1:null,
                words: [
                    {
                        'steptitle': '一、设备连接',
                        'stepdetails': [
                            {
                                'numpic': 'img/jzt/teach/01.png',
                                'step': '访问极路由的云平台，在极路由上安装极智通，网络类型设置为"主节点"。管理 员通过微信扫一扫“运行状态”里面的二维码进行绑定。',
                                'steppic': 'img/jzt/teach/plugin/jlydjttdpt01.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/02.png',
                                'step': '访问极智通官网APP下载，下载对应的电脑客户端并安装。',
                                'steppic': 'img/jzt/teach/plugin/jlydjttdpt02.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/03.png',
                                'step': `客户端完成后，双击Windows桌面的极智通，点击“开始认证”，将显示一个二 维码，
                                        此时用您的手机微信扫一扫，就将显示在第一步绑定的极路由了。小编在 “温州分部”这个节点上右键点击，
                                        然后连接，当状态显示“已连接”时，这台 Windows电脑就已经连到公司内部网络中去了。`,
                                'steppic': 'img/jzt/teach/plugin/jlydjttdpt03.png',
                            },
                        ],
                        'info': `通过极路由的移动办公平台搭建完成。此时，您可以像在办公室一样，
                                访问公司内 部的各种OA、CRM等系统，也可以访问文件共享服务器，打印机等资源。`,
                    },
                ],
            }
        },
        mounted() {
            this.$refs.myTeach.words = this.words;
            this.$refs.myTeach.topwords = this.topwords;
            this.$refs.myTeach.toppic = this.toppic;
            this.$refs.myTeach.info1=this.info1;
            
        }
    }
</script>

<style scoped>
</style>