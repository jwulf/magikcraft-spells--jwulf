const magik = magikcraft.io;

function main() {
    const world = magik.getSender().getWorld()
    const loc = world.getSpawnLocation()
    magik.dixit(loc)
    world.regenerateChunk(loc.chunk.x, loc.chunk.z)
    magik.dixit('Fix it!')
    const player = magik.getSender()
const loc: any = player.getLocation()
const wolrd: any = player.getWorld()
const chunkX = loc.chunk.x
const chunkZ = loc.chunk.z
magik.dixit('chunkX = ' + chunkX) 
magik.dixit('chunkZ = ' + chunkZ)

wolrd.regenerateChunk(chunkX, chunkZ)
}
