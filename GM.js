/**
 * This spell will change your game mode.
 * It will only work if the Magikcraft server is in Creative mode.
 */
function GM(mode="creative") {
const me = magik.getSender();
const GameMode = Java.type("org.bukkit.GameMode");
const modes = {
    c: GameMode.CREATIVE,
    s: GameMode.SURVIVAL,
    x: GameMode.SPECTATOR
}
const firstChar = mode.substr(0,1)
const newMode = modes[firstChar];
 me.setGameMode(newMode)

}