var magik = magikcraft.io;

function karaage(n = 1){
    const Chicken = magik.type("entity.EntityType").CHICKEN;
    const sender = magik.getSender();
    const num = Math.min(n, 5);

    for (let i = 0; i < n; i++) {
        const mob = magik.getSender().getWorld().spawnEntity(magik.aspecto(), Chicken); 
    }       
}
