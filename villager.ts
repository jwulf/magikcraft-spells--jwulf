const magik = magikcraft.io;

function main(name: string) {
    const Villager = Java.type("org.bukkit.entity.EntityType").VILLAGER;
    const world = self.getWorld();
    const there = magik.aspecto();
    const mob = world.spawnEntity(there, Villager);
    if (name) {
        mob.setCustomName('Curly')
        mob.setCustomNameVisible(true)
    }
}
