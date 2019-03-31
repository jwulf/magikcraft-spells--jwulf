const magik = magikcraft.io;

const world = magik.getSender().getWorld()
const loc = world.getSpawnLocation()

world.regenerateChunk(loc.x, loc.z)


