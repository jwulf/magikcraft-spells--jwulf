const magik = magikcraft.io;

function main() {
	const Compass = Java.type('org.bukkit.Material').COMPASS
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack')
    const compass = new ItemStack(Compass)
    self.getInventory().addItem(compass)
}
