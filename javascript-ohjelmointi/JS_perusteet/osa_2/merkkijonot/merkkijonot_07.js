/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;
}

// Esimerkki - älä muokkaa
console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"


// Treenaa: Keksi itse samanlainen funktio eri nimellä
function kirjaimet(etunimi, sukunimi) {
    return etunimi + sukunimi;
}

// Kutsu tekemääsi funktiota
console.log(kirjaimet('M', 'H'));