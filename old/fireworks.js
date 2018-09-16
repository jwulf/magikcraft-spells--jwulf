const magik = magikcraft.io;

function fireworks(name) {
    var there = magik.aspecto();
    magik.doNTimes(function () { magik.stella(there);
        magik.iacta(name);}, 1000, 300);
    magik.iacta(name);
    magik.stella(there);
}
