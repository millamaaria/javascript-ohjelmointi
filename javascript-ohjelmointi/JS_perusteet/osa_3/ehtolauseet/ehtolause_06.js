/**
Kehitä funktio nimeltä greaterNum, joka:

- Hyväksyy kaksi argumenttia, jotka molemmat ovat numeroita.
- Palauttaa näistä kahdesta suuremman numeron.
 */

function greaterNum(number, number2) {
 if (number >= number2) {
    return number;
 }
 else{
    return number2;
 }

}
// Esimerkkikäyttö - älä muokkaa
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));