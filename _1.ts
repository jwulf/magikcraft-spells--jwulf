const magik = magikcraft.io;
function _1() {
    /*magik.dixit(Object.keys(magik));   */
    const sender = magik.getSender();
    const handle = magik.durablePlayerMap.get('KEY');
    magik.dixit(handle);
    if (handle) {
        magik.dixit('Cancelling timer');
        magik.clearInterval(handle);
    } else {
        magik.dixit('Creating timer')
        magik.durablePlayerMap.put('KEY', magik.setInterval(() => magik.dixit('Hello!'), 3000));
    }
}
