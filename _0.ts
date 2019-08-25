const magik = magikcraft.io

// import * as events from 'events'

// events.playerInteract(evt => magik.dixit(evt.player, 'Interact!'))
// magik.dixit('Event registered!')

// events.blockBurn(evt => true)

// while (true) {
//     magik.infierno()
// }
var inventory = require('inventory');
var items = require('items');

function main() {
    // magik.exsultus(50)
    magik.memento.setItem('msg', 'hello')
    magik.dixit(magik.memento.getItem('msg'))
}