const magik = magikcraft.io;

function n() {
    const Material = magik.type('Material');
    const here = magik.hic();
    const world = magik.getSender().getWorld();
    
    const x = here.getX();
    const y = here.getY();
    const z = here.getZ();

    /**
     * Returns a random number that is not 0 - ie: doesn't strike the player
     */
    function getRandomDelta(X, Z) {
        const delta = () => Math.random() * 10 - 5;
        const dX = X + delta();
        const dZ = Z + delta();
        const dangerClose = (dX > X - 2 && dX < X + 2 && dZ > Z - 2 && dZ < Z + 2);
        
        return { X: dX, Z: dZ, dangerClose }
    }
    function blast(X, Z) {
        const location = magik.hic();
        const delta = getRandomDelta(X, Z);
        location.setX(delta.X);
        location.setZ(delta.Z);
        if (!delta.dangerClose) {
            world.strikeLightning(location);
        }
    }

   magik.doNTimes(() => {
       magik.doNTimes(() => {
           magik.doNTimes(() => {blast(x,z)}, 15)}, 
        15)}, 
    15);
}