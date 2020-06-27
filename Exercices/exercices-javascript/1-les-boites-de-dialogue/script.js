/*
      Semaine 3 - Théorie JavaScript
      A - Les boîtes de dialogue
*/
console.log('EXERCICE 1 - LES BOITES DE DIALOGUE');

// Exercice 1: Affiche Hello World dans une boite de dialogue alert();
// ---------------------------------------------------------------------
console.log('1.1 | Salutation générale: ALERT()');
// Message de salutation
// window.alert('Hello Word!');

// Affichage dans la console
console.log('      Hello Word!');

// Exercice 2: Place ton code précédent en commentaire, dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur
// ---------------------------------------------------------------------
console.log('1.2 | Salutation personnalisée: PROMPT() et ALERT()');
// Variable qui stocke le prénom de l'utilisateur
let yourName = prompt("Comment t'appelles-tu?", 'Ex: Jeremy');

// Message de salutation adressé à l'utilisateur
// alert('Salut ' + yourName + '!');

// Affichage dans la console
console.log('      Salut ' + yourName + '!');

// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()
// ---------------------------------------------------------------------
console.log("1.3 | Sélection de l'utilisateur: PROMPT(), CONFIRM() et ALERT()");

// Variable qui stocke l'âge de l'utilisateur
let yourAge = prompt('Quel âge as-tu?', 'Ex: 5 ans');

// Transformation de la chaîne de caractères en Nombre entier
let parseYourAge = parseInt(yourAge, 10);

// Affichage dans la console
console.log("      J'ai " + parseYourAge + ' ans.');

// Vérification de l'âge
if (parseYourAge >= 18) {
  // Demande de confirmation
  window.confirm(prompt('Confirmez votre âge'));

  // Message de salutation
  alert('Bienvenue ' + yourName + '!');

  // Affichage dans la console
  console.log('      Bienvenue ' + yourName + '!');
} else {
  // Message d'exclusion
  alert(yourName + ' tu as - de 18 ans, patiente quelques années.');

  // Affichage dans la console
  console.log(
    '      ' + yourName + ' tu as - de 18 ans, patiente encore quelques années.'
  );
}
