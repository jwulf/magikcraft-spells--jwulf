const magik = magikcraft.io;

function insulin() {
    const item = 'POTION'
    const AWKWARD = magik.type('potion.PotionType').AWKWARD;
    const MATERIAL = magik.type("Material");
    const Potion = magik.type("potion.Potion");
    const i = new Potion(AWKWARD);
    const ItemStack = magik.type("inventory.ItemStack");
    const thing = new ItemStack(i);
    magik.getSender().getInventory().addItem(Potion);
}
