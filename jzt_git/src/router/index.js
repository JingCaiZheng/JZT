import Vue from 'vue'
import Router from 'vue-router'
// 框架
import Index from '@/components/Index'
// 网站首页
import Show from '@/components/Show'
// SS700组件
import Home from '@/components/Home'
import Intelligent from '@/components/Intelligent'
import Maintenance from '@/components/Maintenance'
import Pcenter from '@/components/Pcenter'
import Remote from '@/components/Remote'
import Cloudmanagement from '@/components/Cloudmanagement'
//产品追溯
import Retrospect from '@/components/Retrospect'
// 招贤纳士
import Recruit from '@/components/Recruit'
//教程大全
import Allteach from '@/components/Allteach'
    // -->教程子页
    import T1 from '@/components/Teach/T1'
    import T2 from '@/components/Teach/T2'
    import T3 from '@/components/Teach/T3'
    import T4 from '@/components/Teach/T4'
    import T5 from '@/components/Teach/T5'
    import T6 from '@/components/Teach/T6'
    import T7 from '@/components/Teach/T7'
    import T8 from '@/components/Teach/T8'
    import T9 from '@/components/Teach/T9'
    import T10 from '@/components/Teach/T10'
    import T11 from '@/components/Teach/T11'
    import T12 from '@/components/Teach/T12'
    import T13 from '@/components/Teach/T13'
    import T14 from '@/components/Teach/T14'
    import T15 from '@/components/Teach/T15'
    import T16 from '@/components/Teach/T16'
    import T17 from '@/components/Teach/T17'
    import T18 from '@/components/Teach/T18'
    
// 极智通组件
import  Knowjzt from '@/components/Knowjzt'
import Aliennetwork from '@/components/AlienNetwork'
import Plugin from '@/components/Plugin'
import Networkbar from '@/components/Networkbar'
import Users from '@/components/Users'
import Service from '@/components/Service'

// 404页面
import Notfound from '@/components/404'


Vue.use(Router)

export default new Router({
  routes: [
    //这里首页是 Show Index是左右导航框架
    // {path:'/',redirect:'show'},
    // {path:'/show',component:Show},
    {path:'/',redirect:'/index'},
    {
      path: '/index',
      component:Index,
      children:[
        {path:'',redirect:'show'},
        {path:'show',component:Show},
        {path:'recruit',component:Recruit},
        {path:'retrospect',component:Retrospect},
        //SS700路由
        {path:'home',component:Home},        
        {path:'intelligent',component:Intelligent}, 
        {path:'maintenance',component:Maintenance},
        {path:'pcenter',component:Pcenter},        
        {path:'remote',component:Remote}, 
        {path:'cloudmanagement',component:Cloudmanagement},
        //极智通路由
        {path:'knowjzt',component:Knowjzt},    
        {path:'networkbar',component:Networkbar},
        {path:'plugin',component:Plugin},  
        {path:'aliennetwork',component:Aliennetwork},
        {path:'users',component:Users},
        {path:'service',component:Service},                                          
        // 报错页面
        {path:'*',component:Notfound},                                                   
      ]
    },
    // 所有教程页面
    {path:'/allteach',component:Allteach,
        redirect: {name:'t1'},
        children:[
            {path:'t1',name:'t1',component:T1},
            {path:'t2',name:'t2',component:T2},
            {path:'t3',name:'t3',component:T3},
            {path:'t4',name:'t4',component:T4},
            {path:'t5',name:'t5',component:T5},
            {path:'t6',name:'t6',component:T6},
            {path:'t7',name:'t7',component:T7},
            {path:'t8',name:'t8',component:T8},
            {path:'t9',name:'t9',component:T9},
            {path:'t10',name:'t10',component:T10},
            {path:'t11',name:'t11',component:T11},
            {path:'t12',name:'t12',component:T12},
            {path:'t13',name:'t13',component:T13},
            {path:'t14',name:'t14',component:T14},
            {path:'t15',name:'t15',component:T15},
            {path:'t16',name:'t16',component:T16},
            {path:'t17',name:'t17',component:T17},
            {path:'t18',name:'t18',component:T18},
            // 报错页面
            {path:'*',name:'notfound',component:Notfound},
        ]
    },
    // 报错页面
    {path:'*',component:Notfound},
  ],
  // 切换路由时回到页面顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
