const magik = magikcraft.io

import * as events from 'events'

events.playerInteract(evt => magik.dixit(evt.player, 'Interact!'))
magik.dixit('Event registered!')

events.blockBurn(evt => true)
