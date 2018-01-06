const magik = magikcraft.io;

function _tour() {
	events.forEach((event, i) =>
        magik.setTimeout(() =>
            magik.ianuae(magik.toJSON(JSON.parse(event.event).location)), i * 1000));
}
