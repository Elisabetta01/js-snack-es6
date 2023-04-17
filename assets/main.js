/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

//snack 1:

//creo array 
const bici = [
     {
          nome: "Bianchi",
          peso: 10
     },
     {
          nome: "Verde",
          peso: 8
     },
     {
          nome: "Rossi",
          peso: 11
     }
];

console.log(bici)

let biciLeggera = bici[0]

//bici con peso minore
bici.forEach(( element ) => {
     if( element.peso < biciLeggera.peso ){
          biciLeggera = element
     }
})

console.log(biciLeggera)

//destructuring
const { nome, peso } = biciLeggera

//stampo con template literal
console.log(`La bici più leggera è ${nome} con un peso di ${peso} kg`)


//snack 2:
//creo array
const squadre = [
     {
          nome: "Bianchi",
          puntiFatti: 0,
          falliSubiti: 0
     },
     {
          nome: "Rossi",
          puntiFatti: 0,
          falliSubiti: 0
     },
     {
          nome: "Verdi",
          puntiFatti: 0,
          falliSubiti: 0
     },
     {
          nome: "Gialli",
          puntiFatti: 0,
          falliSubiti: 0
}
];

//genero numeri random
function numRandom(){
     return Math.floor( Math.random()* 100 ) + 1
}

//sostituisco numeri random alle info 
squadre.forEach(( element ) => {
     element.puntiFatti = numRandom()
     element.falliSubiti = numRandom()
}) 

console.log(squadre)

//nuovo array con nome e falli subiti
let nuovoArray = squadre.map(( element ) => {
     const {nome, falliSubiti} = element
     return {nome, falliSubiti}
})

console.log(nuovoArray)