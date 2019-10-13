const magik = magikcraft.io;
import * as events from 'events'
function main() {
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack')

    const Bow = Java.type('org.bukkit.Material').BOW
    const bow = new ItemStack(Bow)
    self.getInventory().addItem(bow)

    const Arrow = Java.type('org.bukkit.Material').ARROW
    const arrow = new ItemStack(Arrow,100)
    self.getInventory().addItem(arrow)
    events.entityShootBow(e => {
         const aZombie = Java.type("org.bukkit.entity.EntityType").ZOMBIE
        e.setProjectile(aZombie)
    })
}

