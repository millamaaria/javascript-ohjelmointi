/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
  return name.substring(name.length - 1);
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function viimeinen(nimi){
  return nimi.substring(nimi.length - 1);
}

// Kutsu tekemääsi funktiota

console.log(viimeinen('Jenna'));
console.log(viimeinen('Liisu'));