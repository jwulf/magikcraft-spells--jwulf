const magik = magikcraft.io;

function main() {
    const world = magik.getSender().getWorld()
    const loc = world.getSpawnLocation()
    magik.dixit(loc)
    world.regenerateChunk(loc.chunk.x, loc.chunk.z)
    magik.dixit('Fix it!')
    const player = magik.getSender()
    
const loc1: any = player.getLocation()

const wolrd: any = player.getWorld()
const chunkX = loc1.chunk.x
const chunkZ = loc1.chunk.z
magik.dixit('chunkX = ' + chunkX) 
magik.dixit('chunkZ = ' + chunkZ)

wolrd.regenerateChunk(chunkX, chunkZ)
}
