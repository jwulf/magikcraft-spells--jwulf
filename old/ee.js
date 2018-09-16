const magik = magikcraft.io;

function ee() {
    const e = new EventEmitter();

    e.on('_event', (data) => {
        magik.dixit(`Event triggered with ${data}`);
    });

    e.emit('_event', 'test data');
}
