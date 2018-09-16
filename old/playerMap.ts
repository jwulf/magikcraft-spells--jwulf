const magik = magikcraft.io;

function playerMap() {
	if (!magik.playerMap.get('test')) {
        magik.playerMap.put('test', 'hello world');
        magik.dixit('Put');
    } else {
        magik.dixit(magik.playerMap.get('test'));
    }
}
