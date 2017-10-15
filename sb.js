const magik = magikcraft.io;

function sb(repeats = 200, delay = 300) {
    magik.dixit('Snowball!');
    const sender = magik.getSender();
    const snowball = magik.type("entity.Snowball").class;
    
    const hurl = (thing) => () => sender.launchProjectile(thing)

    const volley = () => magik.doNTimes(hurl(snowball), repeats, delay, null);

    magik.doNTimes(volley, repeats, delay*10, null);
}