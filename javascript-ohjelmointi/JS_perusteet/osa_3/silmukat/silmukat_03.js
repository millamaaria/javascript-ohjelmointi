// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden. 
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.
// Tehdään tämä opettajan esimerkkinä

let etaisyys, aika;
while (etaisyys !== 0) {
    etaisyys = Number(prompt("Syötä etäisyys kilometreinä"))

    if (etaisyys === 0){
        console.log("Ei enempää keskinopeuksia")
        break;
    }
    aika = Number(prompt("Anna aika tunteina"))

let keskinopeus = etaisyys / aika;
console.log('Keskinopeus on:', keskinopeus)
}