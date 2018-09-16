const magik = magikcraft.io

function writeA() {
    const STONE = magik.type('Material').STONE

    const startLocation = magik.hic()
    const x = startLocation.getX()
    const y = startLocation.getY()
    const z = startLocation.getZ()

    var A = [ 24 ,60, 36, 102, 126, 126, 102, 102 ];

    function decimal2binary(num){
        return num.toString(2).padStart(8, "0")
    }

    function binaryMap(fontCharData) {
        return fontCharData.map(decimal2binary)
    }

    function lineWriter(line, linenumber) {

        function blockWriter(bit, bitnumber) {
            if (bit == "0") return
            const currentX = x + bitnumber
            const currentY = y + 8 - linenumber
            const block = magik.getSender().getWorld().getBlockAt(currentX, currentY, z)
            block.setType(STONE)
        }

        Array.from(line).forEach(blockWriter)
    }

    binaryMap(A).forEach(lineWriter)
}