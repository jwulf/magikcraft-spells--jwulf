const NukkitBossBar = require('magikcraft/bossbar/bossbar-nukkit').NukkitBossBar;

const magik = magikcraft.io;

const playerMap = {}
playerMap[self.name] = self
const e = NukkitBossBar.addBossBar(playerMap, 'BGL')
NukkitBossBar.sendBossBarToPlayer(self, e, 'BGL')
