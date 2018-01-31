declare const echo:any;
declare const require: any;

const events = require('events');

events.playerInteract(evt => echo("Interact!"));

