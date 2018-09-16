const magik = magikcraft.io;

function mvtp(worldname) {

    run("mv tp " + worldname);
    function run(cmd) {
        var sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
}
