const magik = magikcraft.io;
const log = magik.dixit;

let Events = magik.memento.getItem('events');

// const Listener = Java.type("org.bukkit.event");
// const HandlerList = Java.type("org.bukkit.event.HandlerList");
const EventPriority = Java.type("org.bukkit.event.EventPriority");
const EventCallback = Java.type("io.magikcraft.EventCallback");

const eventTypes = {
    PlayerDeathEvent: 'org.bukkit.event.entity.PlayerDeathEvent',
    PlayerRespawnEvent: 'org.bukkit.event.player.PlayerRespawnEvent',
    EntityDamageByEntityEvent: 'org.bukkit.event.entity.EntityDamageByEntityEvent',
    EntityDamageEvent: 'org.bukkit.event.entity.EntityDamageEvent',
    ProjectileHitEvent: 'org.bukkit.event.entity.ProjectileHitEvent',
    PlayerItemConsumeEvent: 'org.bukkit.event.player.PlayerItemConsumeEvent',
    PlayerQuitEvent: 'org.bukkit.event.player.PlayerQuitEvent',
    PlayerMoveEvent: "org.bukkit.event.player.PlayerMoveEvent",
    RegionEnterEvent: 'com.mewin.WGRegionEvents.events.RegionEnterEvent',
    RegionLeaveEvent: 'com.mewin.WGRegionEvents.events.RegionLeaveEvent',
    PlayerCommandPreprocessEvent: 'org.bukkit.event.player.PlayerCommandPreprocessEvent',
};


if (!Events) {
    const Emitter = new EventEmitter();


    const Events = {

        on: (eventName, callback) => Emitter.on(eventName, callback),

        unregisterAll: () => {
            Emitter.removeAllListeners();
        },

        registerAll: () => {
            for (let type in eventTypes) {
                const javaType = eventTypes[type];
                Emitter.removeAllListeners();
                magik.getPlugin().registerEvent(
                    Java.type(javaType).class,
                    EventPriority.MONITOR,
                    true,
                    new EventCallback({
                        callback: function (event: any) {
                            Emitter.emit(type, event);
                        }
                    })
                );
            }
        },
    };
    magik.memento.setItem('events', Events);
}


function events() {
    Events.on('PlayerMoveEvent', evt => log(evt.player))
}
