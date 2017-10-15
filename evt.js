const magik = magikcraft.io;

function evt() {
    magik.registerEvent(Java.type("org.bukkit.event.player.PlayerItemConsumeEvent"), evt => {
        magik.getPlugin().getServer().getPlayer('sitapati').sendMessage('hello')
    });
}
