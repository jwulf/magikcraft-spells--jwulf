const magik = magikcraft.io;

function myFirstSpell(name = 'stranger') {
    if (!name) { 
        name = ''
    }
    magik.dixit(`Hello ${name}`);
}
