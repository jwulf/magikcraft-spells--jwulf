const magik = magikcraft.io;


function main() {
    const Villager = Java.type("org.bukkit.entity.EntityType").VILLAGER;
    const world = magik.getSender().getWorld();
    const start = magik.aspecto();
    const mob = world.spawnEntity(start, Villager);
    mob.setCustomName('Curly')
    mob.setCustomNameVisible(true)
    const timer = setInterval(() => self.setCompassTarget(mob.getLocation()), 1000)
    setTimeout(() => clearInterval(timer), 60000)
}

