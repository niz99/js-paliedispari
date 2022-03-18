function giocoPariDispari(pariDispari, numero){

   let numeroComputer = Math.floor(Math.random() * 5) + 1;
   console.log(numeroComputer);

   let somma = numeroComputer + numero;
   console.log(somma);

   if((somma % 2 == 0 && pariDispari == "Pari") || (somma % 2 == 1 && pariDispari == "Dispari")){
       return "Hai vinto";
   } else {
       return "Ha vinto il computer";
   }

}

do{
    var sceltaPD = prompt("Pari o dispari?");
} while (sceltaPD != "Pari" && sceltaPD != "Dispari");

do {
    var sceltaNumero = parseInt(prompt("Inserisci un numero da 1 a 5: "));
} while (sceltaNumero < 1 || sceltaNumero > 5);

let risultato = giocoPariDispari(sceltaPD, sceltaNumero);

console.log(risultato);

