const magik = magikcraft.io;

function speed(s = 50) {
    const velocity = s/100;
    magik.getSender().setWalkSpeed(velocity);
}
