/* //Palindroma

//funzione per palindromi

function palindroma() {
  var yourWord = prompt("Inserisci una parola: ");
  var yourWordOpp = "";
  var isPalindrome = "";

  if (typeof yourWord === "string" && yourWord !== "") {
    //Utilizzando un ciclo for lettera per lettera assegno alla var yourWordOpp la nostra parola inserita, al contrario.
    for (var i = 0; i < yourWord.length; i++) {
      yourWordOpp += yourWord.charAt(yourWord.length - i - 1);
    }
    console.log("Parola al contrario: " + yourWordOpp);
    //controllo per vedere se la parola inserita sia un palindromo o no
    if (yourWord === yourWordOpp) {
      console.log("PALINDROMO!!!!");
      return (isPalindrome = "PALINDROMO");
    } else {
      console.log("La parola non è un palindromo...");
      return (isPalindrome = "La parola non è un palindromo...");
    }
  } else {
    console.log("ATTENZIONE: NON HA INSERITO UNA PAROLA");
  }
}

palindroma();
 */
//Pari o Dispari?

var yourEvenOrOdd = prompt("Pari o dispari?").toLowerCase();
console.log("La tua scelta: " + yourEvenOrOdd);
console.log("Conversione pari e dispari: " + pariDispari(yourEvenOrOdd));
var number = parseInt(prompt("Inserisci un numero da 1 a 5: "));
console.log("Numero scelto: " + number);
var sum = number + randNum();
console.log("Somma numeri: " + sum);
console.log("Risultato: " + winner(sum, yourEvenOrOdd));

//blocco funzioni

function pariDispari(str) {
  if (str == "pari") {
    return (str = 0);
  } else {
    return (str = 1);
  }
}

function randNum() {
  var number = Math.floor(Math.random() * 5) + 1;
  return number;
}

function winner(somma, pari_dispari) {
  if (somma % 2 === pari_dispari) {
    return "HAI VINTO";
  } else {
    return "HAI PERSO...";
  }
}
