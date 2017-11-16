const magik = magikcraft.io;

function _0() {
    magik.dixit("yo!")
    var System = Java.type("java.lang.System")
    magik.dixit("yo!")
    for each (e in System.env.entrySet()) {
        magik.dixit(e.key + "=" + e.value)
    }
}
