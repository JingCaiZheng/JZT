// 为每个image文件加上路径
export default{
    addaddr(sstr){
        var str=`static/${sstr}/`;
        var url= null;
        for(var i=0;i< $('svg image').length;i++  ){
            url= $('svg image')[i].href.baseVal;
            $('svg image').eq(i).attr('xlink:href',str+url)
        }
    }
}