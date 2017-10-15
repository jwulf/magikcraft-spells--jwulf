const { bar, color, style } = require('magikcraft-lore-ui-bar');

const magik = magikcraft.io;
const setTimeout = magik.setTimeout;

magik.dixit('Hi3');

function test() {
    const b = bar()
        .text("Hello")
        .color(color.GREEN)
        .style(style.NOTCHED_10)
        .progress(50)
        .show();
    setTimeout(() => b.color(color.RED), 2000);
    setTimeout(() => b.progress(70), 4000);
    setTimeout(() => b.text("Goodbye").progress(65).color(color.PURPLE), 6000);
    setTimeout(() => b.destroy(), 8000);
}


