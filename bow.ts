const magik = magikcraft.io;
import * as events from 'events'
function main() {
    const me = self
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack')

    const Bow = Java.type('org.bukkit.Material').BOW
    const bow = new ItemStack(Bow)
    self.getInventory().addItem(bow)

    const Arrow = Java.type('org.bukkit.Material').ARROW
    const arrow = new ItemStack(Arrow, 100)
    self.getInventory().addItem(arrow)
    if (!magik.memento.getItem('bowHandler')) {
        magik.memento.setItem('bowHandler',

            events.entityShootBow(e => {
                if (e.getEntity() != me) {
                    return
                }
                const aZombie = Java.type("org.bukkit.entity.EntityType").ZOMBIE
                const there = magik.aspecto()
                const world = there.world
                const zombie = world.spawnEntity(there, aZombie);
                e.setProjectile(zombie)
            }))
    }
}

