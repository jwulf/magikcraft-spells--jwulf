const magik = magikcraft.io;

const events = require('events');

events.playerInteract(evt => magik.dixit("Interact!"));

function _0() {
    // a couple of tests
    magik.dixit('a'.repeat(3)); 
    magik.dixit('hello'.includes('h'))
    magik.setTimeout(() => magik.dixit('Hello'), 1000)
    // magik.dixit(global);
}
