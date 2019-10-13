const magik = magikcraft.io;
const Collectors = java.util.stream.Collectors;
const track = require('./track').main

function main() {
    const there = magik.aspecto()
    const world = there.world
    const entities = world.getNearbyEntities(there, 2, 2, 2)
        .stream()
        .filter(e => e.getName() !== self.name)
        .collect(Collectors.toList())
    if (entities.length > 0) {
        track(entities[0].getName())
    } else {
        echo(self, "Didn't find anyone!")
    }
}
