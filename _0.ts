const magik = magikcraft.io

import * as events from 'events'

events.playerInteract(evt => echo(evt.player, 'Interact!'))
magik.dixit('Event registered')