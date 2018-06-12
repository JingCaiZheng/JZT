
<template>
    <div>
        <nav class="navbar navbar-default navbar-inverse navbar-fixed-top " role="navigation" id="navbar">
            <div class="container-fluid" > 
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#example-navbar-collapse">
                        <span class="sr-only">切换导航</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <li class="navbar-left  hidden-xs hidden-sm "><img src="../assets/img/index/logo.png" alt="" class="logo"></li>
                    <router-link to="/" class="navbar-brand visible-xs visible-sm">返回首页</router-link>                    
                </div>
                <!-- 注册登陆可选 -->
                <!-- <ul class="nav navbar-nav navbar-right"> 
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li> 
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li> 
                </ul>  -->
                <div class="collapse navbar-collapse navbar-right" id="example-navbar-collapse" >
                    <ul class="nav navbar-nav ">
                        <li class="navbar-left hidden-xs hidden-sm back"><router-link to="/">返回首页</router-link></li>
                        <li class="navbar-right "><router-link to="recruit">招贤纳士</router-link></li>
                        <li class="navbar-right "><a href="http://www.jzt2025.com">登陆云管理平台</a></li>
                        <li class="navbar-right"><router-link to="retrospect">产品追溯系统</router-link></li>
                        <li class="dropdown" v-for="(item,index) in dropdownul">
                            <a class="dropdown-toggle " data-toggle="dropdown">
                                {{item.title}}<b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu" >
                                <li v-for="(itm,idx) in item.dropdown"><router-link :to="itm.path">{{itm.items}}</router-link></li> 
                                <!-- 分离线 -->
                                <li class="divider"></li>                            
                                <li v-for="(itm,idx) in item.divider"><router-link :to="itm.path">{{itm.items}}</router-link></li> 
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                 // 存放导航条下拉
                 dropdownul:[
                    {
                        'title':'SS700智能远程模块',
                        'dropdown':[
                            {'path':'home','items':'了解SS700'},
                            {'path':'cloudmanagement','items':'云管理平台'},
                            {'path':'pcenter','items':'产品中心'},
                        ],
                        'divider':[
                            {'path':'remote','items':'远程维护'},
                            {'path':'maintenance','items':'设备维保'},
                            {'path':'intelligent','items':'智能工厂'},
                        ]
                    },
                    {
                        'title':'极智通移动办公',
                        'dropdown':[
                            {'path':'knowjzt','items':'了解极智通'},
                            {'path':'service','items':'服务与下载'},
                        ],
                        'divider':[
                            {'path':'networkbar','items':'网络棒使用'},
                            {'path':'plugin','items':'插件安装及使用'},
                            {'path':'aliennetwork','items':'异地组网搭建方法'},
                            {'path':'users','items':'用户绑定及权限设置'},
                        ]
                    }
                ],
            }
        },
    }
</script>

<style scoped>
    .logo{
        max-height:50px;
        max-width:100%;
    }
    @media screen and (min-width:990px)and (max-width:1050px){
        .nav>li>a{
            padding:15px 10px !important;
        }
    }
</style>