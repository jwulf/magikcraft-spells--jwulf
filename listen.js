const magik = magikcraft.io;

function listen() {

    const user = magik.getSender().getName();
    const EventCallback = Java.type("io.magikcraft.EventCallback");

    const PlayerInteractEvent = magik.type("event.player.PlayerInteractEvent");
    const EventPriority = magik.type("event.EventPriority");

      magik.getPlugin().registerEvent(
            PlayerInteractEvent.class,
            EventPriority.MONITOR,
            true,
            new EventCallback({
                callback: function(event) {
                    const username = event.player.getName();
                    if (username !== user) {
                        return;
                    }
                    
                    magik.getPlugin().getServer().getPlayer(username).sendMessage(`Interact event: ${username} : ${user}`);    
                }
            })); 

    magik.dixit(PlayerInteractEvent);
}
