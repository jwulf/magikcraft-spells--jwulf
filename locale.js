const magik = magikcraft.io;

// const clazz = Java.type('java.lang.Class');

function locale() {
	const player = magik.getSender();
    magik.dixit('Start------------------')
    magik.dixit(player.spigot().getLocale());
    return
    //magik.dixit(player.getClass().toString());
    const language = getMethod("getHandle", player.getClass())
    magik.dixit(language);

    function getMethod(name, clazz) {
        const methods = clazz.getDeclaredMethods();
        for (let i =0; i < methods.length; i ++) {
            const m = methods[i];
            if (m.getName().toString().contains(name)) {
                magik.dixit('dixit');
                //magik.dixit(m.toString());
                const ep = m.invoke(player, null);
                magik.dixit(ep.getClass().toString());
                const f = ep.getClass().getDeclaredField("locale");
                magik.dixit('f=--------')
                magik.dixit(f.toString())
                f.setAccessible(true);
                const language = f.get(ep);
                return language;
            }
        }
        return null;
    }
}
