const magik = magikcraft.io;

function r(t = 5) {
    const times = t * 1000 / 300; // n seconds, every 300ms
    let n = times;
    magik.setTimeout(shield, 300);
    magik.dixit('Magical shield!');
    function shield() {
        n --;
        const location = magik.hic();
        const nearbyEntities = location.getWorld().getNearbyEntities(location, 8, 8, 8);
        nearbyEntities.forEach(entity => toss(entity));
        if (n>0) {
            magik.setTimeout(shield, 300)
        } else {
            magik.dixit('Shield exhausted!');
        }
    }
}

function toss(entity){
    if (entity.getName() == magik.getSender().getName()) {
        return;
    }
    var Vector = Java.type('org.bukkit.util.Vector');
    entity.setVelocity(new Vector(2,2,2));
}
