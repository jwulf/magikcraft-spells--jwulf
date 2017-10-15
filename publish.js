const magik = magikcraft.io;

function publish() {
    eventbus.publish(`${global.PlayerName}.location`, magik.hic().toString());
    const here = magik.get;
   if (isLocation(here)) {
       magik.dixit(JSON.stringify(locationToJSON(here)));
   }
   here.setWorld(magik.getPlugin().getServer().getWorld('world-tutorial'));
   magik.getSender().teleport(here);
}

function isLocation(thing) {
    return (thing.toString().indexOf('Location') === 0);
}

function locationToJSON(location) {
    return {
        type: 'Location',
        X: location.getX(),
        Y: location.getY(),
        Z: location.getZ(),
        Yaw: location.getYaw(),
        Pitch: location.getPitch(),
        World: location.getWorld().getName()
    }
}