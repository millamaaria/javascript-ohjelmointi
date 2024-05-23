// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:

console.log("tehtävä 1", teamMembers);

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:

teamMembers.shift();

console.log("tehtävä 2", teamMembers);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:

teamMembers.pop();
console.log("tehtävä 3", teamMembers);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:

teamMembers.unshift("Aleksi");
console.log("tehtävä 4", teamMembers);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:

teamMembers.push("Linda");
console.log("tehtävä 5", teamMembers);

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:

let newTeamMembers = teamMembers.slice(2, 4);
console.log("tehtävä 6", newTeamMembers);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:

teamMembers.indexOf("Miikka");

console.log("tehtävä 7", teamMembers.indexOf('Miikka'));

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:

teamMembers.lastIndexOf('Jaakko');

console.log("tehtävä 8", teamMembers.lastIndexOf('Jaakko'));

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:

teamMembers.splice(2, 1, 'Karoliina', 'Bettiina');

console.log("tehtävä 9", teamMembers);

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:

teamMembers.push('Hemmo');

console.log("tehtävä 10", teamMembers);

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:

let uudetMembers = teamMembers.slice(0,6);
console.log("Tehtävä 11", uudetMembers);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty

// Kirjoita koodisi tähän:
let newMembers = ['Tiina', 'Daniel'].concat(teamMembers);

console.log("Tehtävä 12", newMembers);

// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:

newMembers.indexOf("Jukka");
console.log(newMembers.indexOf('Jukka'));

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:

const isotKirjaimet = newMembers.map(function(x) { return x.toUpperCase(); });
console.log(isotKirjaimet);