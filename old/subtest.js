const magik = magikcraft.io;
const topic = 'sitapati.msg';

function subtest() {
    const say = magik.dixit;
    if (global.sub) {
        say('Cancelling existing subscription');
        eventbus.unsubscribeFromTopic(topic);
        global.sub = undefined;
    }
    say('Subscribing ')
    global.sub = eventbus.subscribe(
        topic, 
        data => {
            magik.dixit(data.type);
            eval('magik.dixit(typeof data.data);');
            if (typeof data.data == 'string') {
                magik.dixit(data.data);
            } else {
                magik.dixit(JSON.parse(data.data));
            }
        }
    );
}
