const magik = magikcraft.io;

function admin(name = magik.getSender().getName()) {
      const sender = magik.getSender();
      const plugin = magik.getPlugin();
      const server = plugin.getServer();
      const consoleSender = server.getConsoleSender();
      server.dispatchCommand(consoleSender,`pex  user ${name} group set admin`);
}

