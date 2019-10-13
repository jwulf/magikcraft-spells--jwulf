const magik = magikcraft.io;
import * as events from 'events'
const Collectors = java.util.stream.Collectors;

const HANDLER = 'ZombieBowHandler'

function main() {
    const me = self
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack')

    const Bow = Java.type('org.bukkit.Material').BOW
    const bow = new ItemStack(Bow)
    self.getInventory().addItem(bow)

    const Arrow = Java.type('org.bukkit.Material').ARROW
    const arrow = new ItemStack(Arrow, 100)
    self.getInventory().addItem(arrow)
    const existingHandler = magik.memento.getItem(HANDLER)
    if (existingHandler) {
        existingHandler.unregister()
    }
    const handler = events.entityShootBow(e => {
        if (bow != e.getBow()) {
            echo(me, 'Not the Zombie Bow!')

            return
        }
        if (e.getEntity() != me) {
            return
        }

        const aZombie = Java.type("org.bukkit.entity.EntityType").ZOMBIE
        const there = magik.aspecto()
        const world = there.world
        const zombie = world.spawnEntity(e.getProjectile().getLocation(), aZombie);
        const velocity = e.getProjectile().getVelocity()
        zombie.setVelocity(velocity)

        e.setProjectile(zombie);
    })
    magik.memento.setItem(HANDLER, handler)

}


