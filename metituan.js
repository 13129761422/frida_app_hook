
//  改端口调用方式
//  ./flang  -l 0.0.0.0:12345
//  adb forward tcp:12345 tcp:12345
//  frida -H 127.0.0.1:12345  -l jingdong.js  -f com.jingdong.app.mall
//  frida -U -l metituan.js -f com.sankuai.meituan --no-pause
Java.perform(function () {
    var d=Java.use("com.sankuai.waimai.platform.capacity.ad.d");
    d.a.overload('java.lang.String', 'java.lang.String', 'java.lang.Object', 'java.lang.String', 'int').implementation=function(arg1,arg2,arg3,arg4,arg5){
        console.log(arg1,arg2,arg3,arg4,arg5)
        this.a(arg1,arg2,arg3,arg4,arg5)
    }
})


// android hooking watch class_method com.sankuai.waimai.platform.capacity.ad.d.a d --dump-args --dump-return
// android hooking watch class_method com.sankuai.waimai.business.page.kingkong.view.poilist.normal.kastyle.KaPoiItemBlock.a(com.sankuai.waimai.platform.domain.core.poi.Poi, java.util.HashMap, boolean) d --dump-args