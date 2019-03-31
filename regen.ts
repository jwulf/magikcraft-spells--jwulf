const magik = magikcraft.io;

function main() {
    const world = magik.getSender().getWorld()
    const loc = world.getSpawnLocation()

    world.regenerateChunk(loc.x, loc.z)
}
