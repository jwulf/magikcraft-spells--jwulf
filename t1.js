const magik = magikcraft.io;
const Bars = magik.Bars;
const TextComponent = magik.TextComponent;

let T1;

function t1() {
    T1 = { 
        state: 
        {
            insulinOnBoard: 0.2, 
            bgl: 0.4
        } 
    }

    var insulinBar = Bars.addBar(magik.getSender(), 
        new TextComponent("Insulin"), 
        Bars.Color.BLUE, 
        Bars.Style.NOTCHED_20, 
        T1.state.insulinOnBoard, // Progress (0.0 - 1.0)
    );

    var bglBar = Bars.addBar(magik.getSender(), 
        new TextComponent("BGL"), 
        Bars.Color.RED, 
        Bars.Style.NOTCHED_20, 
        T1.state.bgl // Progress (0.0 - 1.0)
    );

    T1.bars = {
            insulin: insulinBar,
            bgl: bglBar
        }
}