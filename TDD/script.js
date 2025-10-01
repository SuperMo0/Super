function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverse(string) {
    return string.split("").reverse().join("");
}


function caesarCipher(string, s) {

    let chars = Array("abcdefghijklmnopqrstuvwxyz".split(""))[0];
    let charsc = Array.from(chars);
    charsc.forEach((v, ix, arr) => { charsc[ix] = charsc[ix].toUpperCase() });
    let new_string = "";
    string.split("").forEach((v, ix, arr) => {
        let asci = string.charCodeAt(ix);
        if (asci < 65 || asci > 122) { new_string += string[ix]; }
        else {
            if (asci < 97) {
                new_char = charsc[((asci - 65) + s) % 26];
                new_string += new_char
            }
            else {
                new_char = chars[((asci - 97) + s) % 26];
                new_string += new_char
            }
        }
    });

    return new_string;
}

// console.log(shift('Hello, World!', 3));
module.exports = { capitalize, reverse, caesarCipher };


