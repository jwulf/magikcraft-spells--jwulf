const magik = magikcraft.io;

const fontData = {
    BLOCKS_PER_CHAR_LINE: 8, 
    a: [24 ,60, 36, 102, 126, 126, 102, 102],
    b: [192, 192, 192, 192, 255, 194, 194, 252],
    c: [255, 192, 192, 192, 192, 192, 192, 255],
    d: [254, 195, 195, 195, 195, 195, 195, 254],
    e: [252, 128, 128, 252, 128, 128, 128, 252],
    f: [0, 62, 32, 62, 32, 32, 32, 32],
    g: [255, 255, 192, 192, 199, 195, 255, 255],
    h: [102, 102, 102, 126, 102, 102, 102, 102],
    i: [255, 126, 24, 24, 24, 24, 126, 255],
    j: [126,126,24,24,24,216,248,112],
    k: [231,102,108,120,124,102,102,247],
    l: [224,96,96,96,96,98,126,254],
    m: [66,231,255,219,219,219,219,219],
    n: [195,195,227,243,219,207,199,195],
    o: [60,102,195,195,195,195,102,60],
    p: [252,102,102,102,124,96,96,96],
    q: [60,102,195,195,195,203,102,61],
    r: [252,102,102,124,120,108,102,243],
    s: [28,38,64,124,62,6,100,56],
    t: [24,126,24,24,24,24,24,12],
    u: [102,102,102,102,102,102,60,24],
    v: [195,195,102,102,102,60,60,24],
    w: [195,195,195,219,219,219,90,36],
    x: [0,195,102,60,24,60,102,195],
    y: [231,102,102,60,24,24,24,24],
    z: [126,126,6,12,24,48,126,126]
} 

function main(letters = 'a') {
    const BLOCK = magik.type('Material').STONE

    const number2binary = num => num.toString(2)
    const addLeadingZeros = line => line.padStart(8, "0")
    const lineBlockArray = line => Array.from(addLeadingZeros(number2binary(line)))
    const binaryMap = letterData => letterData.map(line => lineBlockArray(line))
    const getBlock = (x,y,z) => magik.getSender().getWorld().getBlockAt(x, y, z)

    const here = magik.hic()
    let x = here.getX() + 1
    let y = here.getY() + 1
    let z = here.getZ()

    const chars = Array.from(letters)
    chars.forEach((char, letternum) => 
        binaryMap(fontData[char]).forEach((line, linenum) => 
        line.forEach((char, charnum) => (char == "1" &&
            getBlock(x + charnum + (letternum * 10), y - linenum, z).setType(BLOCK)))))
}