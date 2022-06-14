// - Chiediamo all'utente i chilometri che vuole percorrere;
// - Chiediamo all'utente l'età;
// - Output: prezzo del biglietto;
        // --- il prezzo del biglietto è definito in base ai km (0.21 al km);
        // --- sconto del 20% per i minorenni;
        // --- sconto del 40% per gli over 65;



const kmTravel = parseInt( prompt ("Inserisci i chilometri da percorrere") );
const userAge = parseInt( prompt ("Inserisci la tua età") );
console.log (kmTravel, userAge);

let ticketPrice = kmTravel * 0.21;
console.log(ticketPrice.toFixed(2));

if (userAge < 18) {
    ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
    console.log(`Il passeggero è minorenne, il prezzo del biglietto è: ${ticketPrice.toFixed(2)}`);
} else if (userAge > 65) {
    ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
    console.log(`Il passeggero è un over 65, il prezzo del biglietto è: ${ticketPrice.toFixed(2)}`);
} else {
    console.log(`Il prezzo del biglietto è: ${ticketPrice.toFixed(2)}`);
}



