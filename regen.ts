const magik = magikcraft.io;

function main() {
    const world = magik.getSender().getWorld()
    const loc = world.getSpawnLocation()

    world.regenerateChunk(loc.chunk.x, loc.chunk.z)
    magik.dixit('Fix it!')
}
