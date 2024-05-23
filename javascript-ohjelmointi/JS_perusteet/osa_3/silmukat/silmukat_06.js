/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let sum = 0; 
let count = 0; 

do {
  let number = parseFloat(prompt("Syötä numero:"));

  sum += number;

  count++;

  let choice = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");

  if (choice === 'e') {
    break; 
  }

} while (true);

let average = sum / count;

console.log("Syötettyjen numeroiden keskiarvo:", average);