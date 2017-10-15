var magik = magikcraft.io;

magik.dixit('Initiating Game Loop');

if (gameloop) {
    magik.clearInterval(gameloop);
}

let T1, BossBarAPI;

var gameloop = magik.setInterval(doLoop, 1000);
function doLoop() {
    const state = T1.state;
    let bgl = T1.state.bgl;
    const insulinOnBoard = T1.state.insulinOnBoard;
    const carbsOnBoard = T1.state.carbsOnBoard;

    const insulinAbsorptionRate = insulinOnBoard / 80 + 0.0025;

    if (insulinAbsorptionRate>0){
       // magik.dixit("AbsorptionRate: " + insulinAbsorptionRate);
    } 
    // do Insulin Absorption
    if (insulinOnBoard > 0) {
        const newInsulin = insulinOnBoard - insulinAbsorptionRate;
        if (newInsulin > 0) {
            T1.state.insulinOnBoard = newInsulin;
        } else {
            T1.state.insulinOnBoard = 0;
        }
         // do BGL Absorption
         if (T1.state.bgl > 0) {
             const bglAbsorbed = insulinAbsorptionRate * 0.8;
             const newBGL = T1.state.bgl - bglAbsorbed;
             if (newBGL > 0) {
                 T1.state.bgl = newBGL;
             } else {
                 magik.dixit("Aaaaaarggggh!");
                 T1.state.bgl = 0;
             }
         }
    }

    // Do BGL increase
    if (T1.state.insulinOnBoard == 0) {
        T1.state.bgl += 0.1;
    }
   // magik.dixit("Insulin: " + T1.state.insulinOnBoard);
    const insulin = T1.state.insulinOnBoard;
    T1.bars.insulin.setProgress(insulin);
 
    bgl = T1.state.bgl;
    T1.bars.bgl.setProgress(bgl);
    if (bgl > 0.2 && bgl < 0.4) {
        T1.bars.bgl.setColor(BossBarAPI.Color.GREEN);
    } else {
        T1.bars.bgl.setColor(BossBarAPI.Color.RED);
    }
}