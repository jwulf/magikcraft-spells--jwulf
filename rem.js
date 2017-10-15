/**
 * A persistent memory spell that uses magik.playerMap
 * 
 * This means you can remember things even when you leave the server and come back!
 * 
 * Usage:
 * `/cast rem` -- remember this place as the default place
 * `/cast rem <name>` -- remember this place as the name you give
 */
const magik = magikcraft.io;

function rem(key="here") {
    const here = magik.hic();
	magik.durablePlayerMap.put(`memory.${key}`, here);
    magik.dixit(`Remembered this place as "${key}"`);
}
