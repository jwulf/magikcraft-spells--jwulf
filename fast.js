const magik = magikcraft.io;

function fast(velocity = 1) {
    const speed = Math.min(velocity, 1);
    magik.getSender().setWalkSpeed(speed);
    magik.getSender().setFlySpeed(speed);
}
