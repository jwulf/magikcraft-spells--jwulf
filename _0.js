const magik = magikcraft.io;

function _0() {
    // What?
     magik.doAfter(2, () => console.log('Hello'));
     magik.Events.on('CreatureSpawnEvent', evt => magik.dixit(evt.getEntity().getName()));
}
