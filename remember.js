const magik = magikcraft.io;

function remember(name = "default.place") {
	const place = magik.hic();

    magik.memento.setItem(name, place);
}
