const magik = magikcraft.io;

function call(module, spell = '_default') {
    let char;
    [':', '.'].forEach(_char => {
        if (module.indexOf(_char) != -1) {
        char = _char;
        }
    });
    if (char) {
        const _args = module.split(char);
        module = _args[0];
        spell = _args[1];
    }
    require(module).spells[spell]();
}