/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

 */

function pluralize(substantiivi, määrä) {
    if (määrä === 1){
        return määrä + substantiivi;
    }
    else if (määrä >= 0){
        return määrä + substantiivi + "a";
    }
    }

// Esimerkkikäyttö - älä muokkaa
console.log('Minulla on ' + pluralize(' kala', 0));
console.log('Minulla on ' + pluralize(' koira', 1));
console.log('Minulla on ' + pluralize(' papukaija', 7));


// Treenaa: Keksi itse samanlainen funktio eri nimellä.

function lause(substantiivi, määrä){
    if (määrä === 1){
        return määrä + substantiivi;
    }
    else if (määrä >= 0){
        return määrä + substantiivi + "a";
    }
}


// Kutsu tekemääsi funktiota
console.log('Minulla on ' + lause(' kello', 3));
console.log('Minulla on ' + lause(' paita', 4));
console.log('Minulla on ' + lause(' maitopurkki', 1));