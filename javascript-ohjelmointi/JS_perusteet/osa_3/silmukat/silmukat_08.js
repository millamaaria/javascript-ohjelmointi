// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää. 
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista. 
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

// Ask the user how many numbers they want to enter
let numCount = parseInt(prompt("Kuinka monta numeroa haluat syöttää?"));

// Initialize variables to keep track of smallest and largest numbers
let smallest;
let largest;

// Loop to get input for the specified number of times
for (let i = 0; i < numCount; i++) {
  // Prompt the user to insert a number
  let number = parseFloat(prompt("Syötä numero #" + (i + 1) + ":"));

  // Check if this is the first number entered
  if (i === 0) {
    // If it is, set both smallest and largest to this number
    smallest = number;
    largest = number;
  } else {
    // If not, compare the number with the current smallest and largest
    if (number < smallest) {
      smallest = number;
    }
    if (number > largest) {
      largest = number;
    }
  }
}

// Output the smallest and largest numbers
console.log("Pienin numero:", smallest);
console.log("Suurin numero:", largest);
