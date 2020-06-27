/*
      Semaine 3 - Théorie JavaScript
      B - La calculatrice
*/
console.log('EXERCICE 2 - LA CALCULATRICE');

// Crée une fonction calculatrice: A l'aide des attributs name des éléments HTML input, récupère la valeur entrée par l'utilisateur dans ces inputs à l'aide de la méthode .value;  Ensuite, à l'aide des id des éléments button, effectue l'opération se rapportant au signe du bouton sur les valeurs récupérées des input. Pour terminer, affiche le résultat dans une boite de dialogue alert().

// Utilisez le bout de code suivant pour ajouter un évennement sur chaque bouton en remplacant le paramètre de getElementById par l'ID correspondant au bouton

// ADDITION ------------------------------------------------------------
function additionOnClick() {
  let nbrOne = document.getElementById('first-number').value;
  let nbrTwo = document.getElementById('second-number').value;
  let result = parseInt(nbrOne, 10) + parseInt(nbrTwo, 10);
  console.log('Somme = ' + result);
}

// SOUSTRACTION --------------------------------------------------------
function substractionOnClick() {
  let nbrOne = document.getElementById('first-number').value;
  let nbrTwo = document.getElementById('second-number').value;
  let result = parseInt(nbrOne, 10) - parseInt(nbrTwo, 10);
  console.log('Différence = ' + result);
}

// DIVISION ------------------------------------------------------------
function divisionOnClick() {
  let nbrOne = document.getElementById('first-number').value;
  let nbrTwo = document.getElementById('second-number').value;
  let result = parseInt(nbrOne, 10) / parseInt(nbrTwo, 10);
  console.log('Quotient = ' + result);
}

// MULTIPLICATION ------------------------------------------------------
function multiplicationOnClick() {
  let nbrOne = document.getElementById('first-number').value;
  let nbrTwo = document.getElementById('second-number').value;
  let result = parseInt(nbrOne, 10) * parseInt(nbrTwo, 10);
  console.log('Produit = ' + result);
}
