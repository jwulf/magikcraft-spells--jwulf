const magik = magikcraft.io;

var _superb = require('superb');

function superb(count = 1) {
    const times = Math.min(20, count);

    if (times == 0) {
        return;
    }

    magik.setTimeout(() => magik.dixit(_superb()), times * 1600);
    
    superb(times - 1);

}