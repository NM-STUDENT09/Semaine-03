/*
      Semaine 3 - Théorie JavaScript
      C - Les tableaux
*/
console.log('EXERCICE 3 - LES TABLEAUX');

// Exercice 1: Ajoute "Ted" au tableau suivant
// ---------------------------------------------------------------------
console.log("3.1 | Ajout d'élément dans un tableau");
let castArray = ['Robin', 'Barney', 'Lily', 'Marshal'];

// Ajout d'élément dans le tableau
castArray.push('Ted');
// console.log(castArray.push('Ted'));

// Affichage du tableau après ajout
castArray.forEach(element => console.log('      - ' + element));

// Exercice 2: Affiche l'index de "Ted" dans le tableau dans la console
// ---------------------------------------------------------------------
console.log("3.2 | Index de l'élément ajouté");
const index = castArray.findIndex(element => element === 'Ted');
console.log("      a) L'index de l'élément ajouté est " + index + '.');
console.log(
  "      b) L'élément correspondant à castArray[" +
    index +
    '] est ' +
    castArray[index] +
    '.'
);

// Exercice 3: Affiche l'index de Robin dans le tableau dans la console
// ---------------------------------------------------------------------
/* console.log("3.3 | Index d'un élément du tableau");
const index = castArray.findIndex(element => element === 'Robin');
console.log("      L''index correspondant à Robin est " + index); */

// Exercice 4: Retire "Robin" du tableau
// ---------------------------------------------------------------------
console.log("3.4 | Retrait d'un élément du tableau");
console.log(
  "      L'élément à retirer du tableau est " + castArray.shift('Robin') + '.'
);

// Affichage du tableau après retrait
console.log('      Après retrait le tableau devient: ');
castArray.forEach(element => console.log('      - ' + element));

// Exercice 5: Retire "Ted" du tableau
// ---------------------------------------------------------------------
console.log('3.5 | Retrait du dernier élément du tableau');
console.log(
  "      L'élément à retirer du tableau est " + castArray.pop('Ted') + '.'
);

// Affichage du tableau après retrait
console.log('      Après retrait le tableau devient: ');
castArray.forEach(element => console.log('      - ' + element));

// Exercice 6: Ajoute "Ted" et "Robin" au tableau
// ---------------------------------------------------------------------
console.log('3.6 | Ajout de deux éléments dans le tableau');

// Ajout d'élément dans le tableau
castArray.push('Ted', 'Robin');
// console.log(castArray.push('Ted', 'Robin'));

// Affichage du tableau après ajout
console.log('      Après ajout le tableau devient: ');
castArray.forEach(element => console.log('       - ' + element));

// Exercice 7: Affiche le nouvel index de Ted et Robin dans le tableau dans la console
// -------------------------------------------------------------------
console.log('3.7 | Nouveaux index des derniers ajouts du tableau');
const index1 = castArray.findIndex(element => element === 'Ted');
const index2 = castArray.findIndex(element => element === 'Robin');
console.log('      a) Le nouvel index de Ted est ' + index1 + '.');
console.log('      b) Le nouvel index de Robin est ' + index2 + '.');

// Exercice 8: A l'aide d'une boucle, affiche chaque élément du tableau dans la console
// ---------------------------------------------------------------------
console.log('3.8 | Affichage des différents éléments du tableau');
castArray.forEach(element => console.log('      - ' + element));

// Exercice 9: A l'aide de la méthode .findIndex(), trouve l'index de Lily, ensuite, affiche Lily dans la console
// ---------------------------------------------------------------------
console.log("3.9 | Index d'un élément du tableau + Affichage");
const indexR = castArray.findIndex(element => element === 'Lily');
console.log("      a) L'index de l'élément ajouté est " + indexR + '.');
// console.log(
//   "      Le prénom correspondant à l'index " +
//     indexR +
//     ' est ' +
//     castArray[indexR] +
//     '.'
// );
console.log(
  '      b) Le prénom correspondant à castArray[' +
    indexR +
    '] est ' +
    castArray[indexR] +
    '.'
);

// Exercice 10: A l'aide d'une boucle, multiplie par 2 chaque élément du tableau suivant, crée un nouveau tableau à l'aide de la méthode .push(), affiche le nouveau tableau dans la console
console.log(
  '3.10 | Multiplication des éléments du tableau et affichage des résultats dans un nouveau tableau'
);
// Variable tableau d'origine
let multiplicationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Variable tableau qui recevra les résultats de la multiplication de chaque élément
/* let newArray = [];
/* let resultat = element * 2;
let resultat = multiplicationArray[Index] * 2; */

//Boucle qui parcourt le tableau et multiplie chacun de ses élements par 2
// multiplicationArray.forEach(element => console.log('      ' + element));

// Multiplication de chaque élément
// let resultat = element * 2;
// Création du nouveau tableau
// newArray.push(resultat);

/*console.log(newArray); */
