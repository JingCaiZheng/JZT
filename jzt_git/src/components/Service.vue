<template>
    <div>
        <el-container class="c-el-padding">
            <el-main class="c-el-padding">
                <el-row>
                        <img src="../assets/img/jzt/service/top.png" class="img-responsive center-block" style="width:100vw">
                </el-row>
                <el-row class="r1">
                    <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:18,offset:3}" :md="{span:16,offset:4}" :lg="{span:14,offset:5}">
                        <el-row class="" >
                            <el-col :span="16" :offset="4">
                                <div class="text-center top5 pfont">
                                    <p >请先关注公众号再下载APP</p>
                                    <img src="../assets/img/jzt/service/qrcode.jpg" class="img-half-8 center-block">
                                    <p >微信扫描二维码加关注</p>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="form-group row">
                            <div class="top2 bottom5 text-center" >
                                <ul class="list-inline">
                                    <li v-for="(item,index) in downloads">
                                        <a  @click="dialogVisible = true;downclick(item.url,item.type)" class="icon download-a ">
                                            <i :class="[item.iconclass,'imgscale']"></i>{{item.type}}
                                        </a>
                                        <el-dialog
                                            title="提示"
                                            :visible.sync="dialogVisible"
                                            >
                                            <span class="pfonts" >确认是{{downloadtype}}吗？</span>
                                            <span slot="footer" class="dialog-footer">
                                                <el-button @click="dialogVisible = false">取 消</el-button>
                                                <el-button type="primary" @click="download(downloadurl);dialogVisible=false">确认</el-button>
                                            </span>
                                        </el-dialog>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                downloads:[
                    {'url':'http://www.smartswallow.com/public/apk/smartswallow.apk','iconclass':'apk','type':'安卓版 下载'},
                    {'url':'https://itunes.apple.com/cn/app/id1118638859','iconclass':'ios','type':'iOS版 下载'},
                    {'url':'http://www.smartswallow.com/public/apk/极智通.exe','iconclass':'windows','type':'Windows版 下载'},
                    {'url':'https://itunes.apple.com/cn/app/ji-zhi-tong/id1119179098?mt=12','iconclass':'ios','type':'Mac版 下载'},
                ],
                dialogVisible: false,
                downloadurl:null,
                downloadtype:null,
                
            }
        },
        methods:{
            download(url){
                window.location.href=url;
            },
            downclick(url,type){
                this.downloadurl=url;
                this.downloadtype=type;
            }
        }
    }
</script>

<style scoped>
    i.apk,i.ios,i.windows{
        display: inline-block;
        width: 56px;
        height: 56px;
        vertical-align: middle;
    }
    i.apk {
        background: url(../assets/img/jzt/service/aide_icon.png) no-repeat -78px -111px;
    }
    i.ios {
        background: url(../assets/img/jzt/service/aide_icon.png) no-repeat left -111px;
    }
    i.windows {
        background: url(../assets/img/jzt/service/aide_icon.png) no-repeat -150px -111px;
    }
    a.download-a {
        border: 1px solid #93C43E;
        background: #93C43E;
    }
    a.icon {
        vertical-align: middle;
        text-decoration: none;
        display: inline-block;
        width: 220px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        margin-top: 20px;
    }
    a.icon:hover{
        color: #1296db;
    }
    @media screen and (max-width:767px){
        
    }
</style>