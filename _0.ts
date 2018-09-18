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

function main(...name) {
    // magik.dixit(self)
    inventory(self)
    .add( items.cake(1) )
    .add( items.bakedPotato(1) )
    magik.dixit('Hello ' + name.join(' '))
}