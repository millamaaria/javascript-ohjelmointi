'use strict';

// Tehtävä 1: Perus Try-Catch käyttö
/*
Kääri koodi try-catch-lohkoon mahdollisten virheiden käsittelyä varten.
Tulosta 'Hups, jotain meni pieleen!' catch-lohkossa konsoliin.
*/

function task1() {
  // Simuloi virhe
  throw new Error('Hups, jotain meni pieleen!');
}

function task1() {
    try {
      throw new Error('Hups, jotain meni pieleen!');
    } catch (error) {
      console.log(error.message);
    }
  }
  
  task1();  


// Tehtävä 2: ReferenceErrorin käsittely
/*
Yritä käyttää määrittelemätöntä muuttujaa try-lohkossa.
Käsittele ReferenceError ja tulosta se konsoliin.
*/

//function task2(parameter) {
//  try {
//    console.log(parameter.someProperty);
//  } catch (error) {
//    console.log(error);
//  }
//}

//task2(parameter);


// Tehtävä 3: Finallyn käyttö
/*
Käytä try-catch-finally-lohkoa. Finally-lohkossa tulosta 'Suoritus päättyi'.
*/
let parameter = 2;

function task3(parameter) {
  try {
    console.log(parameter.someProperty);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Suoritus päättyi");
  }
}

task3(parameter);

// Tehtävä 4: Sisäkkäinen Try-Catch
/*
Sisäkkäisessä try-lohkossa on toinen try-catch-lohko.
Simuloi virhe sisäkkäisessä try-lohkossa ja käsittele se sisäkkäisessä catch-lohkossa.
*/

function task4(parameter) {
try {
    try {
      
      console.log(parameter.someProperty);
    } catch (nestedError) {
      
      console.log("Nested error:", nestedError);
    }
  } catch (outerError) {
    
    console.log("Outer error:", outerError);
  }
}
  
  task4(parameter);
  

// Tehtävä 5: Funktio Try-Catchilla
/*
Luo funktio, joka käyttää try-catchia käsittellessään taulukon indeksin ulkopuolista virhettä.
*/

let myArray = [1, 2, 3];

function task5(taulukko, indeksi) {
  try {
    return taulukko[indeksi];
  } catch (error) {
    console.log("Error:", error);
    return undefined;
  }
}

console.log(task5(myArray, 0)); 
console.log(task5(myArray, 1));
console.log(task5(myArray, 2));
console.log(task5(myArray, 3)); 