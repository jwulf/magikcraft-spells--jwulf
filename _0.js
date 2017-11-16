const magik = magikcraft.io;

function _0() {
    var sender = magik.getSender();
    var System = Java.type("java.lang.System")

    for each (e in System.env.entrySet()) {
        sender.sendMessage(e.key + "=" + e.value)
    }
}
