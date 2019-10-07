const magik = magikcraft.io;


function main(name: string) {
    const Villager = Java.type("org.bukkit.entity.EntityType").VILLAGER;
    const world = magik.getSender().getWorld();
    const start = magik.aspecto();
    const mob = world.spawnEntity(start, Villager);
    if (name) {
        mob.setCustomName(name)
        mob.setCustomNameVisible(true)
    }
    const timer = setInterval(() => self.setCompassTarget(mob.getLocation()), 1000)
    setTimeout(() => clearInterval(timer), 60000)
}

