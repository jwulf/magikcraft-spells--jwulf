const magik = magikcraft.io;

function impersonate(newname) {
    if (!newname) {
        magik.dixit('Pass in a name!');
        return;
    }
    const player = magik.getSender();
    const world = player.getWorld();
    const tracker = world.tracker;
    tracker.untrackEntity(player);
    player.name = newname;
    tracker.track(player);
}
