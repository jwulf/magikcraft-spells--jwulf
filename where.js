const magik = magikcraft.io;

function where() {
    magik.dixit('Player locations:');
    magik.getPlugin().getServer().getOnlinePlayers().forEach(player => magik.dixit(`§6${player.getName()} : §a${player.getLocation().getWorld().getName()}`));
}
