const magik = magikcraft.io;

let global_test_var = 0;

function newSpell() {
    let n = magik.setInterval(()=> {
        magik.dixit(`global_test_var: ${global_test_var}`);
        global_test_var ++;
    }, 1000);
    magik.setTimeout(
        ()=> { 
            magik.dixit('Timer cancelled');
            magik.clearInterval(n);
        }, 
        5000);    
}
