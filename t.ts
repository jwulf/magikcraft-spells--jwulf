const magik = magikcraft.io;
const track = require('./track').main

function main() {
    const there = magik.aspecto()
    const world = there.world
    const entities = world.getNearbyEntities(there, 2, 2, 2)
    if (entities.length > 0) {
        track(entities[0].getName())
    } else {
        echo(self, "Didn't find anyone!")
    }
}
