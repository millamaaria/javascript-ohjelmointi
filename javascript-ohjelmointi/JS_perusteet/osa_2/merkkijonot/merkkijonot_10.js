/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
  return word.charAt(0).toUpperCase(1) + word.toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"



// Treenaa: Keksi itse samanlainen funktio eri nimellä




// Kutsu tekemääsi funktiota