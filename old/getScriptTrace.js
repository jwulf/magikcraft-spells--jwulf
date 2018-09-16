const magik = magikcraft.io;

function getScriptTrace() {
    try {
        throw new Error();
    } catch (e) {
        magik.dixit(e.stack);
    }
}