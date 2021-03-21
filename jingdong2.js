

Interceptor.attach(Module.findExportByName(null, "fopen"), {
    onEnter: function(args) {
//        console.log("fopen Interceptor attached onEnter...");
//        console.log("fopen param0>>>>>>>" +  args[0].readCString());
    },
    onLeave: function(args) {
//        console.log("fopen Interceptor attached onLeave...");
    }
})

var is_find_frida = false
Interceptor.attach(Module.findExportByName(null, "strstr"), {
    onEnter: function(args) {
//        console.log("strstr Interceptor attached onEnter...");
//        console.log("strstr param0>>>>>>>" +  args[0].readCString());
//        console.log("strstr param1>>>>>>>" +  args[1].readCString());
        if (args[1].readCString().indexOf("frida")){
            is_find_frida = true
        }else{
            is_find_frida = false
        }
    },
    onLeave: function(retval) {
//        console.log("strstr Interceptor attached onLeave..." + retval);
        if (is_find_frida){
            retval.replace(ptr("0x0"))
        }
    }
})

function abc(){
    var base_address=Module.findBaseAddress('libjdbitmapkit.so')
    if (base_address!=null){
        console.log("param:ok");
        var str;
        Java.perform(function () {
            str = Java.use("java.lang.String");
        });
        Interceptor.attach(new NativePointer(base_address.add(0x2598-1)), {
            onEnter: function (args) {
                 console.log("param1>>>>>>>");

            },
            onLeave: function (retval) {
            }
        });
    }
}
abc();
