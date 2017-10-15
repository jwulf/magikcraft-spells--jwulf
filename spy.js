/**
 * Capture a video of your movement in Minecraft.
 */
const magik = magikcraft.io;

function spy(name= "--help", seconds=20, fps = 20) {
    if (name === "--help") {
        magik.dixit("Usage: /cast spy [name] [secs]");
        magik.dixit("Usage: /cast spy [name] [secs] [fps]");
        return;
    }
    global.film = {};
    film.frames = [];

    film.metadata = {
        fps,
        seconds
    };
    const interval = 1000 / fps;
    const totalFrames = fps * seconds;
    magik.dixit(`Recording ${seconds}s at ${fps} fps`);
    const player = magik.getPlugin().getServer().getPlayer(name);
    let count = 0;
    const camera = magik.setInterval(()=>{
        const location = player.getLocation(); 
        film.frames.push(location);
        count ++;
        if (count > totalFrames) {
            magik.clearInterval(camera);
            magik.dixit('Finished recording!');
        }
    }, interval);
}

