const magik = magikcraft.io

const e = new EventEmitter();

e.on('something', () => magik.dixit('event handler called'))

e.emit('something')
