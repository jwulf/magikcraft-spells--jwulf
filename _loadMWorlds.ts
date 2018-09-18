const magik = magikcraft.io;

const executeCommand = command => __plugin.server.dispatchCommand(__plugin.server.consoleSender, command)

const worlds = [
    'magikcraft/intro',
    'magikcraft/ballerbridge',
    'magikcraft/kigam-jungletomb',
    'magikcraft/blockbuster',                  
    'magikcraft/kigam-outskirts',
    'magikcraft/egypt-3',
    'magikcraft/kigam-port',
    'magikcraft/flight',
    'magikcraft/kigam-volcano',
    'magikcraft/flight2',
    'magikcraft/nordisk',
    'magikcraft/pirate-island',
    'magikcraft/jungle',
    'magikcraft/tutorial',
    'magikcraft/kigam',
    'magikcraft/tutorial-backup',
    'magikcraft/kigam-dungeon',
    'magikcraft/kigam-frozenvillage',
    'magikcraft/zombie-arena',
    'magikcraft/kigam-jail'
]

worlds.map(w => {
    executeCommand(`mv import ${w} normal`)
    executeCommand(`mv load ${w}`)
})

executeCommand('hd reload')

