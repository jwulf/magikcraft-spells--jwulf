/**
 * Set up health and food levels for testing MCT1
 */
const magik = magikcraft.io;

function smct1() {
    const player = magik.getSender();
	const maxHealth = player.getMaxHealth();
    player.setHealth(maxHealth / 3);
    magik.dixit('Setting health to 30%');
    magik.dixit('Setting food level to 3');
    magik.getSender().setFoodLevel(3);
}
