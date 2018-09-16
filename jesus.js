const magik = magikcraft.io;

function jesus(sampleRate = 50) {
    const duration = 10000;
    const times = duration / sampleRate;
    let reps = 0;
    let oldBlock;
    const loop = magik.setInterval(function(){
        reps ++;
        if (reps > times) {
            magik.clearInterval(loop);
            return;
        }
        const here = magik.hic();
        const block = here.getWorld().getBlockAt(here.getX(), here.getY() - 1, here.getZ());
        const _type = block.getType();
        if (_type === Material.WATER || _type === Material.STATIONARY_WATER) {
            block.setType(Material.ICE);
            let oldBlock = block;
        }
        if (oldBlock && oldBlock !== block) {
            oldBlock.setType(Material.WATER);
            oldBlock = undefined;
        }
    }, sampleRate)
}
