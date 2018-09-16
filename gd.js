const magik = magikcraft.io;
const material = org.bukkit.Material;
const player = magik.getSender();

function gd() {
const X = "X";
    const array = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0],
    [0,0,0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0,0,0],
    [0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0],
    [0,0,0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0,0,0],
    [0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0],
    [0,0,X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X,0,0],
    [X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X],
    [X,X,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,X,X],
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
].map(row => row.map(col => { return col === X ? 'AIR' : 'BEDROCK'; }));
    const numRows = array.length;
    const numCols = array[0].length;
    const height = 5;
    for (let h = 0; h < height; h++) {
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                    
                const zCoord = Math.floor(numRows / 2) - i;
                const xCoord = Math.floor(numCols / 2) - j;
                spawnAtPoint3d(zCoord, xCoord, h, array[i][j]);
            }
        }
    }
}

function spawnAtPoint3d(zCoord, xCoord, yCoord, element) {
    // get final location with zCoord,
    // use final zCoord location as start location for xCoord

    const startLocation = player.getTargetBlock(null, 100).getLocation();

    const zYaw = zCoord > 0 ? 0 : 180;
    const zLocation = getFinalLocation(startLocation, zYaw, Math.abs(zCoord));

    const xYaw = xCoord > 0 ? 90 : -90;
    const xLocation = getFinalLocation(zLocation, xYaw, Math.abs(xCoord));

    const yYaw = 0;
    const yPitch = yCoord > 0 ? 90 : -90;
    const yLocation = getVerticalLocation(xLocation, yYaw, Math.abs(yCoord));

    setBlock(yLocation, element);
}

function getVerticalLocation(startLoc, pitch, distance) {
    const loc = startLoc;
    loc.setPitch(-90); // straight up
    return loc.add(loc.getDirection().setX(0).normalize().multiply(distance));
}

function getFinalLocation(startLoc, yaw, distance) {
    return normalizedStartLocation(startLoc, yaw).add(getDirectionToAddToStartLocation(yaw, distance));
}

function getDirectionToAddToStartLocation(yaw, distance) {
    const loc = player.getLocation();
    loc.setYaw(loc.getYaw() + yaw);
    return loc.getDirection().setY(0).normalize().multiply(distance);
}

function normalizedStartLocation(startLoc, yaw) {
    const loc = startLoc;
    loc.setYaw(loc.getYaw() + yaw);
    return loc;
}

function setBlock(location, element) {
    location.getBlock().setType(getBlockObject(element));
}

function getBlockObject(element) {
    switch (element) {
        case 'LOG':
            return material.LOG;
        case 'BEDROCK':
            return material.BEDROCK;
        case 'AIR':
            return material.AIR;

    }
}

function spawnObject(object, location) {
    player.getWorld().spawn(location, object.class);
}

