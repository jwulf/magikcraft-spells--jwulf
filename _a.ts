const magik = magikcraft.io

const e = new EventEmitter();

e.on('something', () => magik.dixit('called'))

e.emit('something')
