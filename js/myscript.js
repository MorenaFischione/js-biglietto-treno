
/*  Esercizio Biglietto del treno

a - Chiedere all'utente attraverso il pront il numero di chilometri
    che vuole percorrere e l'età del passeggero.
    
b - Dobbiamo calcolare il prezzo totale del viaggio tenedo conto:
    1) il prezzo del biglietto varia a seconda dei chilometri = 0,21euro a km
    2) applicare uno sconto del 20% per i minorenni
    3)applicare uno sconto del 40% over 65.
*/

// Inizializziamo le due variabili, subito dopo averle definite.
let kmPercorsi = parseInt (prompt("quanti chilometri vuoi percorrere?"));

if (Number.isNaN(kmPercorsi)) {
    alert ("devi inserire un numero")
};

let età = parseInt (prompt("quale è la tua eta"));

if (Number.isNaN(età)) {
    alert ("devi inserire un numero")
};
 

// Calcoliamo il costo del Biglietto in base ai km indicati dall'utente.
let prezzoBiglietto = (kmPercorsi * 0.21);
console.log (prezzoBiglietto);


if (età < 18) {
    //Calcoliamo la nostra percentuale sconto al 20 percento in base al prezzoBiglietto
    let valoreScontoVentiPerc = (prezzoBiglietto * 20) / 100;
    console.log (valoreScontoVentiPerc);

    // Calcoliamo il prezzoBiglietto meno valoreSconto
    let costoBigliettoScontatoVentiPerc = prezzoBiglietto - valoreScontoVentiPerc;

    //arrotondiamo a 2 decimali
    costoBigliettoScontatoVentiPerc = costoBigliettoScontatoVentiPerc.toFixed(2);
    document.getElementById ("costo-biglietto").innerHTML = "Il costo del tuo bigliotto sarà:" + costoBigliettoScontatoVentiPerc + " \u20AC ";
} else if (età > 65) {
    //Calcoliamo la nostra percentuale sconto al 40 percento in base al prezzoBiglietto
    let valoreScontoQuarantaPerc = (prezzoBiglietto * 40) / 100;
    console.log (valoreScontoQuarantaPerc);


    // Calcoliamo il prezzoBiglietto meno valoreSconto
    let costoBigliettoScontatoQuarantaPerc = prezzoBiglietto - valoreScontoQuarantaPerc;

    //arrotondiamo a 2 decimali
    costoBigliettoScontatoQuarantaPerc = costoBigliettoScontatoQuarantaPerc.toFixed(2);
    document.getElementById ("costo-biglietto").innerHTML = "Il costo del tuo bigliotto sarà:" + costoBigliettoScontatoQuarantaPerc + " \u20AC ";
} else {
    prezzoBiglietto;
    document.getElementById ("costo-biglietto").innerHTML = "Il costo del tuo bigliotto sarà:" + prezzoBiglietto + " \u20AC ";

};



