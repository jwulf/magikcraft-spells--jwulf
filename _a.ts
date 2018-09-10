const magik = magikcraft.io

const e = new EventEmitter();

e.on('something', () => magik.dixit('event handler called yo'))

e.emit('something')
