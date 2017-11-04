var magik = magikcraft.io;

function karaage(n = 1){
    const Chicken = magik.type("entity.EntityType").CHICKEN;
    const world = magik.getSender().getWorld();
    const num = Math.min(n, 100);

    for (let i = 0; i < n; i++) {
        const mob = world.spawnEntity(magik.aspecto(), Chicken); 
    }       
}
