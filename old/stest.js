const magik = magikcraft.io;

function stest() {
	eventbus.subscribe('test.topic', msg => console.log(msg.data.toString()));
}
