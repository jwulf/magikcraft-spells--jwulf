const magik = magikcraft.io;
import * as events from 'events'
const Collectors = java.util.stream.Collectors;
const ChatColor = Java.type('org.bukkit.ChatColor')
const ItemStack = Java.type('org.bukkit.inventory.ItemStack')
const Material = Java.type('org.bukkit.Material')
const HANDLER = 'ZombieBowHandler'
const NAME = ChatColor.GREEN + "Zombie Bow"

function main() {
    const me = self

    const Bow = Material.BOW
    const bow = new ItemStack(Bow)
    const bowmeta = bow.getItemMeta();
    bowmeta.setDisplayName(NAME);
    const data = bowmeta.getPersistentDataContainer()
    bow.setItemMeta(bowmeta)
    self.getInventory().addItem(bow)

    const Arrow = Material.ARROW
    const arrow = new ItemStack(Arrow, 100)
    self.getInventory().addItem(arrow)
    const existingHandler = magik.memento.getItem(HANDLER)
    if (existingHandler) {
        existingHandler.unregister()
    }
    const handler = events.entityShootBow(e => {
        if (e.getBow().getItemMeta().getDisplayName() !== NAME) {
            echo(me, 'Not the Zombie Bow!')

            return
        }
        if (e.getEntity() != me) {
            return
        }

        const aZombie = Java.type("org.bukkit.entity.EntityType").ZOMBIE
        const there = magik.aspecto()
        const world = there.world
        const zombie: LivingEntity = world.spawnEntity(e.getProjectile().getLocation(), aZombie);
        const velocity = e.getProjectile().getVelocity()
        zombie.setVelocity(velocity)
        zombie.setAI(false)

        e.setProjectile(zombie);
    })
    magik.memento.setItem(HANDLER, handler)

}


