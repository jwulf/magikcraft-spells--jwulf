const magik = magikcraft.io;

function teleport(name = "default.place") {
	const place = magik.memento.getItem(name);

    if (place) {
        magik.ianuae(place);
    } else {
        magik.dixit(`No place called "${name}"`);
    }
}
