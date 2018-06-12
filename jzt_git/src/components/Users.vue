<template>
    <div>
        <!--新用户绑定、权限设置 -->
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
                topwords: '本教程介绍私有云新用户如何绑定',
                toppic: 'img/jzt/teach/user/xyhtjbt.png',
                info1:'注意：新用户的增加只能是付费用户，在增加新用户时管理员（管理员为第1个用 微信扫描绑定的用户）请按以下步骤操作：',
                words: [
                    {
                        'steptitle': '一、设备连接',
                        'stepdetails': [
                            {
                                'numpic': 'img/jzt/teach/01.png',
                                'step': `新用户扫描私有云的二维码。扫描之后，管理员的极智通微信公众号将收到一个 “授权登录通知”，点击“详情”进入：`,
                                'steppic': 'img/jzt/teach/user/xyhbdpt-01.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/02.png',
                                'step': '管理员点击“同意”给予通过，新用户就绑定好了。',
                                'steppic': 'img/jzt/teach/user/xyhbdpt-02.png',
                                'talk':{
                                    'title':'小结',
                                    'talkpic1':'img/jzt/teach/user/talk1.png',
                                    'talkpic2':'img/jzt/teach/user/talk2.png',
                                    'title2':'管理员注意了，新用户绑定的二维码通过以下途径获取：',
                                    'A':'A、“私有云网络棒”用户二维码获取途径：',
                                    'a1':`1、通过网络棒进行网络连接（如果进行无线连接，网络棒热点为“GQ_XXXXXX”“XXXXXX”为MAC后6位，热点名称如果更改过，连接更改后的名称即可）`,
                                    'a2':`2、用浏览器访问http://10.213.44.1:8888（请用半角输入方式），即会显示二 维码，
                                            让新用户用微信扫二维码就可以进行绑定了（如果新用户在外地，把二维 码图片发给新用户扫描也是一样滴！）。`,
                                    'B':'B、极路由用户二维码获取途径：',
                                    'b1':'1、用浏览器访问https://app.hiwifi.com，进入极路由云平台。',
                                    'b2':'2、点击插件“极智通”图标进去之后，即会显示二维码。',
                                    'nextwords':'接下来，再介绍一下，管理员在私有云后台设置用户访问权限：'
                                }
                            },
                            {
                                'numpic': 'img/jzt/teach/01.png',
                                'step': `通过手机进入极智通微信公众号点击左下角“我的极智通”、“私有云”；`,
                                'steppic': 'img/jzt/teach/user/xyhbdpt-03.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/02.png',
                                'step': `点击“授权”，进入后选择要设置权限的新用户。`,
                                'steppic': 'img/jzt/teach/user/xyhbdpt-04.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/03.png',
                                'step': `比如管理员要对“极智通”这个用户的访问权限进行设置，点击“修改”进入：`,
                                'steppic': 'img/jzt/teach/user/xyhbdpt-05.png',
                            },
                            {
                                'numpic': 'img/jzt/teach/04.png',
                                'step': `比如“极智通”用户只能访问IP地址为：192.168.102.197的这一台服务器，则 在“授权访问主机列表”里输入相应的IP地址，进行保存就可以了。`,
                                'steppic': 'img/jzt/teach/user/xyhbdpt-06.png',
                            },
                        ],
                        'info': `注意：如果管理员不对用户访问权限进行限制，则不需要进行访问权限的设置，进 行新用户绑定就可以了。
                                另外，如果还要在服务器对用户访问权限进行设置，则需 要在文件共享里对用户进行设置，这里不作阐述。私有云新用户添加及访问权限设 置介绍完成！`,
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