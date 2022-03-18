function verificaPalindroma(string){

    const arrayParola = parola.split("");

    const arrayContrarioParola = arrayParola.reverse();

    const stringaParola = arrayContrarioParola.join("");

    if(parola == stringaParola){
        alert("La parola è palindroma");
        return "La parola è palindroma";
    } else {
        alert("La parola non è palindroma");
        return "La parola non è palindroma";
    }
}

const parola = prompt("Inserisci una parola per verificare se è palindroma: ");

const risultato = verificaPalindroma(parola);

console.log(risultato);