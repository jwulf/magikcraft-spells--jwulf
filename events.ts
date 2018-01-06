const magik = magikcraft.io;

function events() {
	const magik = magikcraft.io;
    const mct1Events = (magik as any).eventNamespace('mct1.events');
    magik.dixit(Object.keys(mct1Events).toString());
    const EntityDeathEvent = Java.type("org.bukkit.event.entity.EntityDeathEvent");
    const PlayerInteractEvent = Java.type("org.bukkit.event.player.PlayerInteractEvent");
    // mct1Events.addEvent(EntityDeathEvent.class, evt => magik.dixit(evt.toString()));
    mct1Events.addEvent(PlayerInteractEvent, evt => magik.dixit("Player Interacted"));
    magik.dixit(mct1Events.events.length); // 2
    //mct1Events.removeAll();
    //magik.dixit(mct1Events.events.length); // 0
}
