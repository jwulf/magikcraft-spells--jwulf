const magik = magikcraft.io;
const locationTopic = '場所';

// `イベントバス（eventbus）
function pljp() {
    const here = magik.hic(); // プレーヤーの現在地を取得する
    const hereJSON = magik.toJSON(here); // それをJSONオブジェクトに変換する
    // magik.dixit(JSON.stringify(hereJSON)); // あなたはそれを印刷することができます

    // イベントバス上の「場所」トピックにプレーヤーの場所を公開する
    eventbus.publish(locationTopic, {name: global.PlayerName, location: hereJSON});
}