const magik = magikcraft.io;

declare const args;
function main(power = 100) {
    magik.dixit(`Passed argument: ${power}`)
    magik.dixit(`Global args: ${args}`)
    magik.exsultus(power);
    magik.dixit("Exsultus!");
}
