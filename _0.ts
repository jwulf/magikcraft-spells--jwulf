const magik = magikcraft.io

// import * as events from 'events'

// events.playerInteract(evt => magik.dixit(evt.player, 'Interact!'))
// magik.dixit('Event registered!')

// events.blockBurn(evt => true)

// while (true) {
//     magik.infierno()
// }

function main() {
    magik.dixit('Hello ' + arguments.reduce((a, all) => {
        all + ' ' + a 
    }, ''))
}