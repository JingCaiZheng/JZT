<template>
    <div>
    <!-- 异地网组件搭建 -->
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
                topwords: `本教程介绍如何搭建异地组网。如下面的示意图，公司总部在杭州，极路由的IP段 是192.168.101.X，北京分部的IP段是192.168.102.X，
                            上海分部的IP段是 192.168.103.X，通过极智通可以让三地的网络互通起来。其前提条件是三个路由器 都已经绑定到同一个极路由账户下,
                            并且三个路由器的IP段必须设成不一样，另外， 不要用10.X.X.X，这个地址被极智通使用了。`,
                toppic:'img/jzt/teach/aliennet/ydzwbt-01.png',
                info1:null,
                words: [
                    {
                        'stepdetails': [
                            {
                                'steppic': 'img/jzt/teach/aliennet/ydzwpt-01.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/01.png',
                                'step': `访问极路由的云平台，在杭州总部的极路由上安装极智通，网络类型设置为"主 节点"。
                                         管理员通过微信扫一扫“运行状态”里面的二维码进行绑定。`,
                                'steppic': 'img/jzt/teach/aliennet/ydzwpt-02.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/02.png',
                                'step': `在北京分部的极路由上安装极智通，网络类型设定为"从节点"。
                                        管理员通过微信 扫一扫“运行状态”里面的二维码进行绑定。`,
                                'steppic': 'img/jzt/teach/aliennet/ydzwpt-03.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/03.png',
                                'step': `在上海分部的极路由上安装极智通，网络类型设置为"从节点"。
                                        管理员通过微信 扫一扫“运行状态”里面的二维码进行绑定。`,
                                'steppic': 'img/jzt/teach/aliennet/ydzwpt-04.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/04.png',
                                'step': `进入微信公众号，点击下方的菜单“我的极智通>>私有云”，此时应该能够看见 三个节点的信息。`,
                                'steppic': 'img/jzt/teach/aliennet/ydzwpt-05.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/05.png',
                                'step': `在北京分部的节点上点击“管理”，进入之后选择“杭州总部”作为所属的主节 点。`,
                                'steppic': 'img/jzt/teach/aliennet/ydzwpt-06.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/06.png',
                                'step': `在上海分部的节点上点击“管理”，进入之后选择“杭州总部”作为所属的主节 点。`,
                                'steppic': 'img/jzt/teach/aliennet/ydzwpt-07.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/07.png',
                                'step': `进入极路由云平台，将上海和北京分部上已经安装的极智通重新启动一下，
                                3台 路由器的异地互联就搞定了。如果不能互通，请把从节点的路由器重启一下。`,
                                'steppic': 'img/jzt/teach/aliennet/ydzwpt-08.png',
                            },
                            
                        ],
                        'info': '在极路由上通过极智通搭建异地组网完成，此时3个节点之间可以相互访问了。',
                    },
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