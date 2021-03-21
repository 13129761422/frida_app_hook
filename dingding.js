// frida -U -l dingding.js  -f com.alibaba.android.rimet --no-pause

Java.perform(function () {
//    var jml=Java.use("jml");
//    jml.a.overload('android.app.Activity', 'long', 'com.alibaba.android.dingtalk.userbase.model.FriendRequestObject$FriendRequestSource', 'android.os.Bundle').implementation=function(arg1,arg2,arg3,arg4){
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        this.a(arg1,arg2,arg3,arg4)
//    }

//    var InetSocketAddress=Java.use("java.net.InetSocketAddress");
//    InetSocketAddress.$init.overload('java.lang.String', 'int').implementation=function(arg1,arg2){
//        console.log(arg1+">" + arg2)
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        return this.a(arg1,arg2)
//    }
    var SearchMobileContactsActivity=Java.use("com.alibaba.android.search.activity.SearchMobileContactsActivity");
    SearchMobileContactsActivity.access$000.overload('com.alibaba.android.search.activity.SearchMobileContactsActivity', 'java.lang.String').implementation=function(arg1,arg2){
        console.log(arg2)
        this.access$000(arg1,arg2)
    }

    var SearchMobileContactsActivity$4=Java.use("com.alibaba.android.search.activity.SearchMobileContactsActivity$4");
    SearchMobileContactsActivity$4.onDataReceived.overload('java.lang.Object').implementation=function(arg1){
        console.log(arg1._b)
        this.onDataReceived(arg1)
    }

    var BizNameCardView=Java.use("com.alibaba.android.user.namecard.widget.BizNameCardView");
    BizNameCardView.setNick.overload('java.lang.String').implementation=function(arg1){
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(arg1)
        this.setNick(arg1)
    }

})