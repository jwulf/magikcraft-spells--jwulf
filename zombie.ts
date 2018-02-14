const magik = magikcraft.io;

function main(n = 20){
    const EntityType = magik.type("entity.EntityType");
    const aZombie = EntityType['ZOMBIE'];
    
    const where = magik.aspecto();
    const world = where.getWorld();

    for (let i=0; i < n; i++) {
        const zombie = world.spawnEntity(where, aZombie); 
    }
    magik.dixit("Behold!");
}