// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty, 
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta. 

let input = prompt("Syötä 20 numeroa pilkuilla erotettuna:");

let numbers = input.split(",").map(Number);

let evenCount = 0;

for (let number of numbers) {

  if (number % 2 === 0) {
    evenCount++;
  }
}

console.log("Parillisia lukuja:", evenCount);