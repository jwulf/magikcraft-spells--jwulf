const magik = magikcraft.io;
const WonderHUD = Java.type("com.antarescraft.kloudy.wonderhudapi.WonderHUD");
const HUDPosition = Java.type("com.antarescraft.kloudy.wonderhudapi.HUDPosition");
const ArrayList = Java.type('java.util.ArrayList')
function hud() {
    const strings = new ArrayList();
     ["Blood Glucose: 6.7", "Insulin: 5u", "Carbohydrates: 15g"].forEach(str => strings.add(str));
     magik.dixit(strings.toString());
    WonderHUD.spawnHUD(magik.getSender(), HUDPosition.TOP_CENTER, 3, strings);
}
