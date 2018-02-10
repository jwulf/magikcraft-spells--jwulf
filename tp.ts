const magik = magikcraft.io;

function tp() {
    const there = magik.memento.getItem('loc');
    magik.dixit(there.toString())
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento('loc', here);
    }
}