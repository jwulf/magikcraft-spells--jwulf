const magik = magikcraft.io;

function inspectMemory() {
    magik.durablePlayerMap.keySet().forEach(key => magik.dixit(key));
    magik.dixit(`Memory has ${magik.durablePlayerMap.size()} items`);
}
