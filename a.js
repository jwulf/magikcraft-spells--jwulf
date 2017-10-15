const magik = magikcraft.io;

function a() {

    const x = 5;
    const y = 3;
    const logan = 12;
    const z = x + logan;

    // What is x?

    http.get('http://www.google.com', (err, result) => {
        if (err) {
            magik.dixit("Error!");
            magik.dixit(err.toString());
        }
        magik.dixit("Result");
        magik.dixit(result.toString());
    })
    magik.dixit("Sebastien");
}
