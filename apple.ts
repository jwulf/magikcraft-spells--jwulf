const magik = magikcraft.io;

function apple(quantity = 1) {
	 const MATERIAL = magik.type("Material");
    const ItemStack = magik.type("inventory.ItemStack");
    const food = new ItemStack(MATERIAL.APPLE);

    for (let i = 0; i ++; i < quantity) {
       magik.getSender().getInventory().addItem(food);
    }
}
