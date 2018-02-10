const magik = magikcraft.io;

function tp() {
    const there = magik.memento.getItem('loc');
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}