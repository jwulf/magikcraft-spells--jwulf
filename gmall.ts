const magik = magikcraft.io;
const utils = require('utils')

function main(mode = 'a') { 
    const GameMode = Java.type("org.bukkit.GameMode");
    const modes = {
        a: GameMode.ADVENTURE,
        c: GameMode.CREATIVE,
        s: GameMode.SURVIVAL,
        x: GameMode.SPECTATOR
    }
    const firstChar = mode.substr(0,1)
    const newMode = modes[firstChar];
    utils.players().forEach(p => p.setGameMode(newMode))

}
