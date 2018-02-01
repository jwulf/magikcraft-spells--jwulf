declare const echo:any;

const events = require('events');

events.playerInteract(evt => echo("Interact!"));