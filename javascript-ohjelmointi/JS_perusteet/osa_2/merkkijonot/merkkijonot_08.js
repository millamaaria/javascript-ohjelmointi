/**
Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 

 */
function sayHello(name) {
    return 'Hello ' + name;
  }
  
  // Esimerkki - älä muokkaa
  console.log(sayHello('Alex')); // "Hello Alex"
  console.log(sayHello('Sam')); // "Hello Sam"
  
  
  
  // Treenaa: Keksi itse samanlainen funktio eri nimellä ja tervehdyksellä
function sanoMoi(name) {
    return 'Moi ' + name;
} 
  // Kutsu tekemääsi funktiota
  console.log(sanoMoi('Jenna'));