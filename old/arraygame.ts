const magik = magikcraft.io;
import * as input from 'input'

const numerals = ['Zero', 'One', 'Two', 'Three', 'Four','Five', 'Six', 'Seven', 'Eight', 'Nine'];

function main(numeral, player) {
    if (numeral) {
        let n = parseInt(numeral);
        if (n >=0 && n <=9) magik.dixit(numeral + ' is called ' + numerals[n]);
        if (n == -1) {
            magik.dixit('Goodbye!');
            return;
        }
    }
    input(self, 'Pick a number between 0 and 9 inclusive', main);
}

