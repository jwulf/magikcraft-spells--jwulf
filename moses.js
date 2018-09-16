const magik = magikcraft.io;
const Material = magik.type('Material');

function moses(duration = 10000, radius = 1) {
    const sampleRate = 50; // 100ms
    const times = duration / sampleRate;
    let repeats = 0;
    const loop = magik.setInterval(function(){
        repeats ++;

        if (repeats > times) {
            magik.clearInterval(loop);
            return;
        }

        const here = magik.hic();
        const xa = here.getX() - radius;
        const xb = here.getX() + radius;
        const ya = here.getY() - radius;
        const yb = here.getY() + radius;
        const za = here.getZ() - radius;
        const zb = here.getZ() + radius;

        const Blocks = [];
        for (let x = xa; x < xb; x++) {
            for (let y = ya; y < yb; y++) {
                for (let z = za; z < zb; z++) {
                    const block = here.getWorld().getBlockAt(x,y,z);
                    if (block.getType() == Material.STATIONARY_WATER || block.getType() == Material.WATER) {
                        block.setType(Material.AIR);
                    }
                }
            }
        } 
    }, times);
}
