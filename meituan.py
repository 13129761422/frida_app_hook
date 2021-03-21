import frida, sys

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

jscode = """
Java.perform(function () {

    var d=Java.use("com.sankuai.waimai.platform.capacity.ad.d");
    d.a.overload('java.lang.String', 'java.lang.String', 'java.lang.Object', 'java.lang.String', 'int').implementation=function(arg1,arg2,arg3,arg4,arg5){
         console.log(arg1,arg2,arg3,arg4,arg5)
         this.a(arg1,arg2,arg3,arg4,arg5)
    }
});
"""

process = frida.get_usb_device().attach('com.sankuai.meituan')
script = process.create_script(jscode)
script.on('message', on_message)
script.load()
sys.stdin.read()