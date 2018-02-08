const magik = magikcraft.io

const events =require('events')

events.playerInteract(evt => magik.dixit(evt.player, 'Interact!'))
magik.dixit('Event registered')