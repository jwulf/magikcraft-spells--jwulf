const magik = magikcraft.io;
import * as events from 'events'
const Collectors = Java.type('')
function main() {
    const me = self
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack')

    const Bow = Java.type('org.bukkit.Material').BOW
    const bow = new ItemStack(Bow)
    self.getInventory().addItem(bow)

    const Arrow = Java.type('org.bukkit.Material').ARROW
    const arrow = new ItemStack(Arrow, 100)
    self.getInventory().addItem(arrow)
    const existingHandler: events.ScriptCraftEventHandler | undefined  = magik.memento.getItem('bowHandler')
    if (existingHandler) {
        existingHandler.unregister()
    }
    const handler = events.entityShootBow(e => {
        if (e.getEntity() != me) {
            echo(me, 'Not me shooting the bow!')
            return
        }
        echo(me, 'Me shooting the bow!')

        // const aZombie = Java.type("org.bukkit.entity.EntityType").ZOMBIE
        const there = magik.aspecto()
        const world = there.world
        // const zombie = world.spawnEntity(there, aZombie);
        const victim = world.getLivingEntities()
        .stream()
        .filter(entity => entity != me)
        .collect(Collectors.toList())
        e.setProjectile(victim)
    })
    magik.memento.setItem('bowHandler', handler)

}

