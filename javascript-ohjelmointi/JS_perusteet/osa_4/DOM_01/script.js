/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/

//const myElement = document.getElementById("content");
//function showAlert("onclick") {
//    alert("Painiketta klikattiin!");
//  };

function displayText() {
    var text = document.getElementById("content");
    text.style.display = "block";
  }