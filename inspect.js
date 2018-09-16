const magik = magikcraft.io;

function inspect(module) {
    const spells = require(module).spells;
    magik.dixit(`Module ${module} contains the following spells:`);
    magik.dixit(Object.keys(spells));
}