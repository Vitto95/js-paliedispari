//Palindroma

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
