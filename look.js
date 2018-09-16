const magik = magikcraft.io;

function look() {
    const where = magik.aspecto();
    magik.dixit(`X: ${where.getX()}`);
    magik.dixit(`Y: ${where.getY()}`);
    magik.dixit(`Z: ${where.getZ()}`);
    magik.dixit(`Pitch: ${where.getPitch()}`);
    magik.dixit(`Yaw: ${where.getYaw()}`);
    magik.dixit(`World: ${where.getWorld()}`);
    magik.dixit(`String: ${where.toString()}`);
}
