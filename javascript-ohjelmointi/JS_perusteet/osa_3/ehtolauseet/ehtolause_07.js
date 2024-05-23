/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/

function assignGrade(pistemaara) {
    if (pistemaara > 90) {
        return "A";
    }
    else if (pistemaara >= 80){
        return "B";
    }
    else if (pistemaara >= 70){
        return "C";
    }
    else if (pistemaara >= 60){
        return "D";
    }
    else if (60 >= pistemaara){
        return "F";
    }
}
// Esimerkkikäyttö - älä muokkaa
console.log('Sinä sait ' + assignGrade(95)); // Sinä sait A
console.log('Sinä sait ' + assignGrade(81)); // Sinä sait B
console.log('Sinä sait ' + assignGrade(72)); // Sinä sait C
console.log('Sinä sait ' + assignGrade(64)); // Sinä sait D
console.log('Sinä sait ' + assignGrade(42)); // Sinä sait F



// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.

function numberBetween(points) {
    if (points >= 100){
        return "J";
    }
    else if (points >= 90){
        return "O";
    }
    else if (points >= 79){
        return "U";
    }
    else if (points >= 68){
        return "T";
    }
}

// Kutsu tekemääsi funktiota

console.log("Sinä sait " + numberBetween(100));
console.log("Sinä sait " + numberBetween(90));
console.log("Sinä sait " + numberBetween(79));
console.log("Sinä sait " + numberBetween(68));
