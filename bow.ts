const magik = magikcraft.io;

function main() {
	const Bow = Java.type('org.bukkit.Material').BOW
    const ItemStack = Java.type('org.bukkit.inventory.ItemStack')
    const bow = new ItemStack(Bow)
    self.getInventory().addItem(bow)
}

