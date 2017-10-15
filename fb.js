const magik = magikcraft.io;

function fb(repeats = 5, delay = 400) {
    magik.dixit('Fireball!');
    const sender = magik.getSender();
    const fireball = magik.type("entity.Fireball").class;
    
    const hurl = thing => () => sender.launchProjectile(thing)

    const volley = () => magik.doNTimes(hurl(fireball), repeats, delay, null);

    magik.doNTimes(volley, repeats, delay*10, null);
}