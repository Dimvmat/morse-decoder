const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arraySymbol = [];
    let symbol;
    let arrayText = [];

    for (let i = 0; i < expr.length; i += 10) {
        symbol = expr.slice(i, i + 10);
        arraySymbol.push(symbol);
    }

    arraySymbol.forEach(function (symbol) {
        let arrayPair = [];

        for (let j = 0; j < 10; j += 2) {
            let pair = symbol.slice(j, j + 2);

            if (pair == '10') {
                arrayPair.push('.');
            } else if (pair == '11') {
                arrayPair.push('-');
            } else if (pair == '**') {
                arrayPair.push(pair);
            }
        }

        str = arrayPair.join('');

        for (let [prop, value] of Object.entries(MORSE_TABLE)) {
            if (prop === str) {
                arrayText.push(value);
            }
        }

        if (str[0] === '*') {
            arrayText.push(' ');
        }
    })

    return arrayText.join('');
}

module.exports = {
    decode
}