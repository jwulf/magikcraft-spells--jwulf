const magik = magikcraft.io;

function apple(quantity = 1) {
	 const MATERIAL = Java.type("org.bukkit.Material");
    const ItemStack = Java.type("org.bukkit.inventory.ItemStack");
    const food = new ItemStack(MATERIAL.APPLE);

    for (let i = 0; i ++; i < quantity) {
       magik.getSender().getInventory().addItem(food);
    }
}
