/**
* Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
* Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
* Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
*/
/*function getTemperature(temp) {
    if (temp > 15){
        console.log("Pue takki päälle");
    } else {
        console.log("Ei tarvitse pukea takkia");
    }
}

let esimerkki = prompt('Mikä on nykyinen lämpötila?');

let numero = Number(esimerkki);

getTemperature(numero); */


// Treenaa: Keksi itse samanlainen funktio eri nimellä

function getAge(age) {
    if (age > 15){
        console.log("Voit vierailla");
    } else{
        console.log("Et voi vierailla");
    }
}

let toinen = prompt('Mikä on ikäsi?');

let numero = Number(toinen);

getAge(numero);

// Kutsu tekemääsi funktiota