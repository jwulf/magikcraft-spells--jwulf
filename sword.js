const magik = magikcraft.io;

function sword() {
        const MATERIAL = Java.type("org.bukkit.Material");
        const ItemStack = Java.type("org.bukkit.inventory.ItemStack");
        const thing = new ItemStack(MATERIAL.DIAMOND_SWORD);
        magik.getSender().getInventory().addItem(thing);
}
