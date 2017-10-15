const magik = magikcraft.io;

function z(n = 50) {
    function run(cmd) {
        const sudo = magik.getPlugin().getServer().getConsoleSender();
        magik.getPlugin().getServer().dispatchCommand(sudo, cmd);
    }
    for (let i = 0; i < n; i++) {
        run('summon zombie');
        magik.dixit(`z ${i}`);
    }
}
