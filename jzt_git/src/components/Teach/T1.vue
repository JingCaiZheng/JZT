<template>
    <div>
        <el-container >
            <el-main class="c-el-padding pdtop5">
                <el-row v-for="(item,index) in teach" :key="index">
                    <el-col class="top2 ">
                        <p class="teachwords">{{item.title}}</p>
                        <div class="suojin lteachwords">{{item.ltitle}}</div>
                        <div v-if="item.childtitle" v-for="(itm,idx) in item.childtitle" :key='idx'>
                            <div class="suojin lteachwords top2">{{itm.item}}</div>
                            <div class='bottom2 top2 text-center'>
                                <div class="borderred inline-block redwords pdall3" v-if="itm.redwords">
                                    <p style="font-weight:bold;"class="lf">注意:</p>
                                    <br>
                                    <div>{{itm.redwords}}</div>
                                </div>
                                <img  class="img-responsive center-block  border1 inline-block" v-if="itm.img" :src="'static/'+itm.img" alt="">
                            </div> 
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>    
    export default{
        data() {
            return {
                teach: [
                    {
                        'title':'第1章  使用前的准备工作',
                        'ltitle':'在使用SS700前先做好准备工作，总共有3个工作，分别是小智账号的创建、jzt2025插件的安装和云管理平台企业账户的建立。',
                        'pic':'',
                      
                    },
                    {
                        'title':'1-1、小智账号的创建',
                        'ltitle':'管理员通过自己的手机号码创建小智账号，具体注册按如下操作：',
                        'pic':'',
                        'childtitle':[
                            {
                                'item':'※第一步：登录www.jzt2025.com后，点击“立即注册！”按钮。',
                                'img':'第1章  使用前的准备工作_files/img_01.png',
                            },
                            {
                                'item':'※第二步：点击“立即注册”之后，系统将跳出微信二维码，请用管理员自己的手机微信进行扫码绑定，绑定之后该微信就与小智账号关联了。',
                                'img':'第1章  使用前的准备工作_files/img_02.png',
                                'redwords':'以后邀请成员加入或分享时请用现在与小智账号关联的微信。',
                            },
                            {
                                'item':'※第三步：扫码之后，将跳出完善注册信息的对话框，请填上相关信息，然后勾选“我同意并遵守上述的《极智通服务协议》”，最后点击“创建账号”的按钮，账号创建完成。',
                                'img':'第1章  使用前的准备工作_files/img_03.png'
                            },
                            {
                                'item':'※第一步：登录www.jzt2025.com后，点击“立即注册！”按钮。',
                                'img':''
                            },
                            
                        ],
                    },
                ]
            }
        },
    }
</script>

<style scoped> 

</style>