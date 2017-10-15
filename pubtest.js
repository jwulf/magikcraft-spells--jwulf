const magik = magikcraft.io;

function pubtest() {
    eventbus.publish('sitapati.msg', 'Hello from the eventbus');
    eventbus.publish('sitapati.msg', {ok: true});
}
