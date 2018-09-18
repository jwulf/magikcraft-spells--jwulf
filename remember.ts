const magik = magikcraft.io;

function main(name = 'home') {
    const here = magik.hic();
    magik.memento.setItem(name, here);
}