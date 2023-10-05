/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  return 5 * 20;
}
console.log(area());

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
}
console.log(crazySum(4, 4));

/*function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  }
  return num1 + num2;
}
console.log(crazySum(4, 4)); /*

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num1) {
  let diff = num1 - 19;

  return num1 > 19 ? diff * 3 : diff;
}
console.log(crazyDiff(50));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  return (n >= 20 && n <= 100) || n === 400;
}

console.log(boundary(400));
console.log(boundary(21));
console.log(boundary(101));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(n) {
  // const epico = "EPICODE";
  if (n.startsWith(epico)) {
    return n;
  }
  return epico + n;
}

//console.log(epify("EPICODE"));

function epify(n) {
  const epico = "EPICODE";
  return n.startsWith(epico) ? n : epico + n;
}
console.log(epify("EPICODE999"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(x) {
  return x % 7 === 0 || x % 3 === 0;
}
console.log(check3and7());

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(epicode) {
  return epicode.split("").reverse().join("");
}
reverseString("Epicode");
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst() {
  const paroleSplittate = "Cena luna sole".split(" ");
  console.log(paroleSplittate);
}
upperFirst();

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
