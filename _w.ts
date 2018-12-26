const magik = magikcraft.io;

/* 
 Fonts are bitmaps.
 Each number is the decimal equivalent of the binary
 bitmap of the line, for example: 00011000 = 24
 Here is a bitmapped 'A':
 00011000 = 24
 00111100 = 60
 00100100 = 36
 01100110 = 102
 01111110 = 126
 01111110 = 126
 01100110 = 102
 01100110 = 102
*/

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
    m: [66,231,255,219,219,219,219,219]
} 

/* 
  Write the specified letters in space with blocks
  Then wipe them out.
  */

function main(word = 'abc' /*default argument value*/) {
    const BLOCK_TYPE = magik.type('Material').STONE
    const PERSIST_SECONDS = 10 // How long the letters persist
    const BLOCKS_BETWEEN_LETTERS = 2 // Spacing between letters
    const BITS = fontData.BLOCKS_PER_CHAR_LINE // How many blocks wide each letter is
    const SPACING = BLOCKS_BETWEEN_LETTERS + BITS // Letter width + spacing between letters
    const blocks = []

    const decimal2binary = num => num.toString(2)
    const addLeadingZeros = line => line.padStart(BITS, "0")
    const binaryLine = line => Array.from(addLeadingZeros(decimal2binary(line)))
    const binaryMap = fontCharData => fontCharData.map(line => binaryLine(line))
    const getBlock = (x, y, z) => magik.getSender().getWorld().getBlockAt(x, y, z)
    const storeBlock = (x, y, z) => blocks.push({x, y, z, blockType: getBlock(x, y, z).getType()})
    const transformBlock = ({x, y, z, blockType}) => getBlock(x, y, z).setType(blockType)
    const storeAndTransformBlock = ({x, y, z, blockType}) => storeBlock(x, y, z) && transformBlock({x, y, z, blockType})
    
    const here = magik.hic()
    const x = here.getX() + 1 // horizontal
    const y = here.getY() + 1 // vertical
    const z = here.getZ() // the other horizontal

    const letters = Array.from(word) // Convert String to Array to get forEach method
    letters.forEach((char, letternum) => 
        binaryMap(fontData[char]).forEach((line, linenum) => 
            line.forEach((block, blocknum) => 
                (block == "1" &&
                storeAndTransformBlock({
                    x: x + blocknum + (letternum * SPACING), 
                    y: y + line.length - linenum, 
                    z, 
                    blockType: BLOCK_TYPE})))))

    // Make word disappear
    magik.setTimeout(() => 
        blocks.forEach(block => transformBlock(block)), 
        PERSIST_SECONDS * 1000)
}