// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0. 
// Tässä vaiheessa ohjelma lopettaa toimintansa. 
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.

let sum = 0; 
let count = 0; 

while (true) {
  let number = parseInt(prompt("Syötä numero (syötä numero 0 laskeaksesi keskiarvo):"));

  if (number === 0) {
    break; 
  }

  sum += number;
  count++; 
}

let average = sum / count;

console.log("Syötettyjen numeroiden keskiarvo:", average);
