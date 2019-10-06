const magik = magikcraft.io;

function main () {
    const MATERIAL = Java.type('org.bukkit.Material').COMPASS
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack')
    const TheThing = new ItemStack(MATERIAL)
    self.getInventory().addItem(TheThing)
}