const { bar, color, style, ComponentBuilder, ChatColor, version } = require('magikcraft-lore-ui-bar');

const magik = magikcraft.io;
const setTimeout = magik.setTimeout;

function mct1() {
    magik.dixit(`Bars version ${version}`);
    const text = ComponentBuilder("Insulin | ").append("Basal: Active").color(ChatColor.GREEN).create();

    const b = bar()
        .text(`BGL: 4.2`)
        .color(color.GREEN)
        .style(style.NOTCHED_20)
        .progress(100/30*4.2)
        .show();
    const i1 = bar()
        .textComponent(text)
        .color(magik.Bars.Color.BLUE)
        .style(style.NOTCHED_20)
        .progress(10)
        .show();
}


