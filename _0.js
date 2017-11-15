const magik = magikcraft.io;

function _0() {
     magik.doAfter(2, () => console.log('Hello'));
     magik.Events.on('CreatureSpawnEvent', evt => magik.dixit(evt.getEntity().getName()));
}
