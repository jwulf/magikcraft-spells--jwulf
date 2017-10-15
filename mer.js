/**
 * Teleport to somewhere remembered using magik.playerMap
 * 
 * This means you can remember things even when you leave the server and come back!
 * 
 * Usage: 
 * `/cast mer` -- teleport to the default remembered place
 * `/cast mer <name>`  -- teleport to a named remembered place
 */
const magik = magikcraft.io;

function mer(key="here") {
    if (!magik.durablePlayerMap.containsKey(`memory.${key}`)) {
        magik.dixit(`I don't remember a place "${key}`);
        return;
    }
    const here = magik.durablePlayerMap.get(`memory.${key}`);
    magik.ianuae(here);
}
