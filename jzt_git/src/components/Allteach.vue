<template>
  <div>
    <!-- 教程 -->
    <el-container class="c-el-padding">
      <el-aside  class="" style="background:#545c64">
        <el-row class="tac">
          <el-col>
            <el-menu 
                default-active="2" 
                class="el-menu-vertical-demo" 
                @open="handleOpen" 
                @close="handleClose" 
                background-color="#545c64"
                :unique-opened=true
                :router=true
                text-color="#fff" 
                active-text-color="#ffd04b">
                <el-submenu :index="item.index" v-for="(item,index) in menus" :key='index'>
                    <template slot="title">
                        <i  :class="item.iconclass"></i>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item  v-for="(itm,idx) in item.groups" :key="idx" :index="itm.index">{{itm.item}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-menu-item :index="item.index" v-for="(item,num) in smenus" :key="item.index">
                    <i :class="item.iconclass"></i>
                    <span slot="title">
                        {{item.title}}
                    </span>
                </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="c-el-padding bgfff ">
        <el-row class="r2 ">
          <el-col class="c1 " :xs="{span:20,offset:2}" :sm="{span:20,offset:2}" :md="{span:20,offset:2}" :lg="{span:20,offset:2}" >
              <router-view ></router-view>
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
          menus:[
            {
                'title':'SS700使用指南',
                'iconclass':'el-icon-location',
                'index':'1',
                'groups':[
                    {'item':'第1章：使用前的准备工作','index':'t1'},
                    {'item':'第2章：设备物理连接','index':'t2'},
                    {'item':'第3章：在模块管理后台绑定SS700及添加设备','index':'t3'},
                    {'item':'第4章：云管理平台使用指南','index':'t4'},
                    {'item':'人机界面（HMI）使用教程','index':'t5'},
                    {'item':'仪表盘使用教程','index':'t6'},
                ]
            },
            {
                'title':'部分PLC的IP设定',
                'iconclass':'el-icon-menu',
                'index':'2',
                'groups':[
                    {'item':'三菱PLC IP设定','index':'t7'},
                    {'item':'台达PLC IP设定','index':'t8'},
                    {'item':'施耐德PLC IP设定','index':'t9'},
                    {'item':'西门子PLC IP设定','index':'t10'},
                ]
            },
            {
                'title':'部分PLC远程维护教程',
                'iconclass':'el-icon-setting',
                'index':'3',
                'groups':[
                    {'item':'三菱PLC以太网连接的远程维护','index':'t11'},
                    {'item':'台达PLC以太网连接的远程维护','index':'t12'},
                    {'item':'施耐德PLC以太网连接的远程维护','index':'t13'},
                    {'item':'三菱PLC USB连接的远程维护','index':'t14'},
                    {'item':'台达PLC USB连接的远程维护','index':'t15'},
                    {'item':'施耐德PLC USB连接的远程维护','index':'t16'},
                ]

            },
           
          ],
          smenus:[
            {
                'title':'欧姆龙PLC USB驱动升级安装向导',
                'iconclass':'el-icon-rank',
                'index':'t17',
            },
            {
                'title':'火狐浏览器安装向导',
                'iconclass':'el-icon-rank',
                'index':'t18',
            }
          ],
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style scoped>
    .el-main{
      overflow: hidden;
      margin-left:300px !important;
    }
    .el-menu-item{
        padding-right: 0px !important;
    }
    .bigfontwords {
        font-size: 2vw;
        font-weight: 500;
        color: #000;
    }
  .el-aside{
    height:100vh;
    position: fixed;
    z-index: 100000;
  }
  @media screen and (max-width:768px) {
    .bigfontwords {
      font-size: 1.8vw;
    }
  }

  .joinword {
    font-size: 2.5vw;
    color: #67b6cd;
    font-weight: bold;
  }

  .joinword:hover {
    text-decoration: none;
  }

  .recruitword {
    color: #797979;
    font-size: 1.8vw;
  }

  .srecruitword {
    color: #797979;
    font-size: 1.5vw;
  }

</style>
