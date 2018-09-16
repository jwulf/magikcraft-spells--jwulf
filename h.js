const magik = magikcraft.io;

function h() {
    magik.dixit(__http__);
    magik.dixit(__http__.httpGet);
    const http = { get: __http__.httpGet};
    magik.dixit(http);
    magik.dixit(http.get);

}
