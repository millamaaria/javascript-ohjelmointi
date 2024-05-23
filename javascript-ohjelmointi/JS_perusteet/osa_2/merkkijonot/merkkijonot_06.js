/**
Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä

 */
function skipFirstCharacter(text) {
    return text.slice(1);
}

// Esimerkki - älä muokkaa
console.log(skipFirstCharacter('Xcode')); // "code"
console.log(skipFirstCharacter('Hello')); // "ello"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function ilmanEnsimmaistaKirjainta(teksti){
    return teksti.slice(1);
}

console.log(ilmanEnsimmaistaKirjainta('niimpäjuu'));

// Kutsu tekemääsi funktiota