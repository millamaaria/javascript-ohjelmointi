// Kirjoita funktio sum1 siten, että se palauttaa a:n ja b:n summan. Käytä tavallista funktiota
// Kirjoita funktio sum2, joka on sama kuin yllä, mutta on nuolifunktio

function sum1(a, b){
    return a + b;
}

sum2 = (a, b) => {
    return a + b;
}

/* Implisiittinen palautus */
const sum3 = (a, b) => a+ b;

// Esimerkki - älä muokkaa
console.log(sum1(1, 3));
console.log(sum1(2, 5));
console.log(sum2(4, 3));
console.log(sum2(7, 5));

