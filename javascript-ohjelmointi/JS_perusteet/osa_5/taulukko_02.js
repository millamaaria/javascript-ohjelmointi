// Harjoitus 1: Määritä taulukon pituus ja ehto tarkistus
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

let pituus = 0;

pituus = myAlphabet.length;
console.log("Tehtävä 1: ", "Merkkijonon pituus on", pituus);

/*
Luo funktio nimeltä myAlphabetLength, joka kirjaa taulukon pituuden.
Sisällytä myös if-lauseke tarkistaaksesi, onko taulukon pituus alle 5.
Odotettu tulos: 
"Taulukon myAlphabet pituus: 7"
"Taulukon pituus on suurempi tai yhtä suuri kuin 5."
*/
// Kirjoita funktiosi tähän

let myAlphabetLength = myAlphabet.length;

if (myAlphabetLength >= 5){
    console.log("Tehtävä 2:", "Taulukon pituus on suurempi tai yhtä suuri kuin 5.");
}


// Harjoitus 2: Käy läpi taulukko ja kirjaa jokainen alkio sen indeksillä
const planets = ['Merkurius', 'Venus', 'Maa', 'Mars', 'Jupiter'];
/*
Kirjaa jokainen planeetta taulukossa yhdessä sen indeksin kanssa.
Odotetut tulokset:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
// Kirjoita koodisi tähän

console.log("Tehtävä 2: ", "Planeetta: ", (planets[0]));
planets.indexOf('Merkurius');
console.log('Indeksi: ', planets.indexOf('Merkurius'));


console.log("Planeetta: ", (planets[1]));
planets.indexOf('Venus');
console.log('Indeksi: ', planets.indexOf('Venus'));


console.log("Planeetta: ", (planets[2]));planets.indexOf('Maa');
console.log('Indeksi: ', planets.indexOf('Maa'));


console.log("Planeetta: ", (planets[3]));
planets.indexOf('Mars');
console.log('Indeksi: ', planets.indexOf('Mars'));


console.log("Planeetta: ",(planets[4]));
planets.indexOf('Jupiter');
console.log('Indeksi: ', planets.indexOf('Jupiter'));


// Harjoitus 3: Kirjaa taulukon alkiot niiden tyyppeineen
const wowDatatypes = [1, 'text', false, null, undefined];
/*
Käy läpi taulukko, kirjaten jokaisen alkion, sen indeksin ja datatyypin.
Odotetut tulokset:
"Alkio: 1, Indeksi: 0, Tyyppi: number"
"Alkio: text, Indeksi: 1, Tyyppi: string"
...
"Alkio: undefined, Indeksi: 4, Tyyppi: undefined"
*/
// Kirjoita koodisi tähän

console.log("Tehtävä 3: ", "Alkio: ", wowDatatypes[0]);
planets.indexOf('Merkurius');
console.log('Indeksi: ', planets.indexOf('Merkurius'));
console.log("Tyyppi: ", typeof 1);

console.log("Alkio: ", wowDatatypes[1]);
planets.indexOf('Venus');
console.log('Indeksi: ', planets.indexOf('Venus'));
console.log("Tyyppi: ", typeof 'text');

console.log("Alkio: ", wowDatatypes[2]);
planets.indexOf('Maa');
console.log('Indeksi: ', planets.indexOf('Maa'));
console.log("Tyyppi: ", typeof false);

console.log("Alkio: ", wowDatatypes[3]);
planets.indexOf('Mars');
console.log('Indeksi: ', planets.indexOf('Mars'));
console.log("Tyyppi: ", typeof null);

console.log("Alkio: ", wowDatatypes[4]);
planets.indexOf('Jupiter');
console.log('Indeksi: ', planets.indexOf('Jupiter'));
console.log("Tyyppi: ", typeof undefined);


// Harjoitus 4: Kirjaa taulukon alkiot ilman silmukkaa
let myArr = [1, 2, "One", true];
/*
Kirjaa jokainen alkio tässä taulukossa metodin avulla eli ilman silmukkaa.
Odotetut tulokset: 1, 2, "One", true
*/
// Kirjoita koodisi tähän

console.log(myArr);


// Harjoitus 5: Etsi yhteiset kurssit kahden opiskelijan välillä
let student1Courses = ['Matematiikka', 'Englanti', 'Ohjelmointi'];
let student2Courses = ['Maantieto', 'Espanja', 'Ohjelmointi'];
/*
Tunnista ja kirjaa ylös kaikki kurssit, jotka ovat yhteisiä sekä student1Courses- että student2Courses-taulukossa.
Odotettu tulos: "Yhteinen kurssi: Ohjelmointi"
*/
// Kirjoita koodisi tähän

let samatKurssit = student1Courses.filter(course => student2Courses.includes(course));

console.log("Yhteiset kurssit:", samatKurssit);


// Harjoitus 6: Kirjaa jokainen taulukon alkion kirjain
let furniture = ['Pöytä', 'Tuolit', 'Matto'];
/*
Kirjaa ylös jokainen kirjain furniture-taulukon jokaisesta alkioista.
Odotetut tulokset:
"Kirjaimet 'Pöytä'-sanassa: P, ö, y, t, ä"
...
"Kirjaimet 'Matto'-sanassa: M, a, t, t, o"
*/
// Kirjoita koodisi tähän

for (let i = 0; i < furniture.length; i++) {
  let word = furniture[i];
  let spelledWord = "";
  
  for (let j = 0; j < word.length; j++) {
    let letter = word[j];
    
    spelledWord += letter;
    if (j < word.length - 1) {
      spelledWord += ",";
    }
  }
  
  console.log(spelledWord);
}


// Harjoitus 7: Suodata positiiviset lämpötilat
let temperatures = [-5, 3, -1, 22, -40, 5, 18];
/*
Kirjoita getPositiveTemperatures-funktio siten, että se palauttaa taulukon, joka sisältää positiiviset lämpötilat (lämpötilat, jotka ovat yli 0).
Odotettu tulos: [3, 22, 5, 18]
*/
// Kirjoita koodisi tähän

let positiveTemperatures = temperatures.filter(temperature => temperature > 0);

console.log("Positiiviset lämpötilat:", positiveTemperatures);


// Harjoitus 8: Suodata parittomat vuodet
/*
Täydennä getOddYears-funktio siten, että se palauttaa kaikki vuodet, jotka ovat parittomia saamistaan vuosiparametreista. 
Vuodet annetaan taulukkona.
Odotetut tulokset:
getOddYears([2019, 2020, 2021]) -> [2019, 2021]
getOddYears([2000, 2015, 2018, 2020]) -> [2015]
*/

// Kirjoita koodisi tähän

let getOddYears = ['2019', '2020', '2021', '2000', '2015', '2018', '2020'];

let oddYears = getOddYears.filter(year => parseInt(year) % 2 !== 0);

console.log("Parittomat:", oddYears);


// Testaus - Poista alta kommenttimerkinnät, niin voit testata funktion toimintaa
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]