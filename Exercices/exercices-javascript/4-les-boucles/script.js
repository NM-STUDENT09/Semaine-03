/*
      Semaine 3 - Théorie JavaScript
      D - Les boucles
*/
console.log('EXERCICE 4 - LES BOUCLES');

// Exercice 1: A l'aide d'une boucle, affiche les chiffres de 0 à 100, place les chiffres dans un tableau que tu nommeras fizzBuzzArray, à l'aide de la méthode .push()
// ---------------------------------------------------------------------
console.log(' ');
console.log('4.1 | Boucle DO ... WHILE');
// console.log('      Hello Word!');

// Variable Tableau qui reçoit les chiffres de 0 à 100
let fizzBuzzArray = [];

// Variable qui déterminele nombre de fois que la boucle boucle sur elle-même
let iteration = 0;

console.log('      a) Itérations :');
do {
  // La méthode PUSH prend la valeur qu'on lui passe en paramètre pour la pousser en fin de tableau.
  fizzBuzzArray.push(iteration);

  // incrémentation de l'itération
  iteration++;

  // Affichage par itération
  console.log(iteration);
} while (iteration <= 100);
console.log(' ');
console.log('    b) Tableau :');

// Affichage du tableau
console.log('fizzBuzzArray = [' + fizzBuzzArray + ']');
console.log(' ');
// Exercice 2: Toujours à l'aide d'une boucle, passe sur chaque élément du tableau que tu viens de créer (fizzBuzzArray), si l'élément est divisible par trois affiche "fizz" dans la console, si l'élément est divisible par cinq affiche "buzz", si il est divisible par trois et par cinq affiche "fizzBuzz"
// ---------------------------------------------------------------------
console.log('4.2 | Boucle FOREACH');

fizzBuzzArray.forEach(element => {
  // Nombre divisible par 3 et par 5
  if (element % 3 === 0 && element % 5 === 0) {
    console.log(element + ' Fizzbuzz');

    // Nombre divisible par 3
  } else if (element % 3 === 0) {
    console.log(element + ' Fizz');

    // Nombre divisible par 5
  } else if (element % 5 === 0) {
    console.log(element + ' Buzz');
  } else {
    // Autre nombre
    console.log(element + ' FB');
  }
});
console.log(' ');

// Exercice 3: A l'aide de l'objet Date (voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) affiche tous les vendredi 13 de l'année 2020
// ---------------------------------------------------------------------
console.log('4.3 | Objet DATE');

/*
Idée 1 :
1) Boucler sur tous mois pour récupérer tous les vendredis
        - Créer un tableau qui reprendra tous les vendredis de l'année
        - Si day == "Vendredi" alors récupérer le numéro (numDay) et le mois (month) correspondant

2) Vérifier si le numéro de chaque vendredi retenu est = à 13 ou pas
      - si day == "Vendredi" && numDay == 13 alors l'insérer dans un tableau avec son mois correspondant
3) Affichage de la liste de tous les vendredis 13 de l'année 2020
*/

// 1 - Déclaration des variables
// -----------------------------------------------
// let uneDate = new Date(annee, mois, jour, numJour, heure);

// Premier jour de l'année 2020
let debutDate = new Date(2020, 'Janvier', 'Mercredi', 1);

// Dernier jour de l'année 2020
let finDate = new Date(2020, 'Décembre', 'Jeudi', 31);

// Nombre de jours d'un mois
let numDays = []; // 28 à 31

// Variable d'itération à incrémenter
let num = 1;

do {
  numDays.push(num);
  // incrémentation de l'itération
  num++;
} while (num <= 31);
// Affichage du tableau
console.log('numJours = [' + numDays + ']');

// Liste des jours
let days = new Array(
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi'
);
console.log('jours = [' + days + ']');

// Liste des mois
let month = new Array(
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
);
console.log('mois = [' + month + ']');

// Variable de l'année 2020
const annee = 2020;

// 2 - ...
// -----------------------------------------------
month.forEach(element => {
  if (days == 'Vendredi' && numDays == 13) {
    return True;
  } else {
    return False;
  }
  console.log('Vendredi 13' + month + 2020);
});

/*
Idée 2 :
1) Boucler sur toute l'année 2020 pour récupérer tous les vendredis ainsi que les numéros et mois correspondants:
    - Créer un tableau qui recevra ces données:
      TabVendredi = [(Vendredi, (NumDay, Month))]

month.forEach(element => {
  if (days == 'Vendredi') {
    return True;
  } else {
    return False;
  }
  console.log('Vendredi ' + numDays + "" + month + "" + 2020);
});

2) Vérifier si les numéros de chaque vendredi vaut 13, récupérer uniquement les vendredis 13 dans un tableau TabVen13[]:

Boucle à faire sur TabVendredi[] :

for (month = 0, month <= 12, month++){
  if(days == "Vendredi" && numDays == 13){
    console.log(TabVen13.push("Vendredi 13 " + month + " 2020.");
  }
}
*/
