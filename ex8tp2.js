// exercice 8 TP2
 // Fonction composer qui prend deux fonctions f et g, et retourne une nouvelle fonction
const composer = (f, g) => (x) => f(g(x));

// Fonction double : retourne le double du nombre
const double = (x) => x * 2;

// Fonction incrementer : retourne le nombre plus
const incrementer = (x) => x + 1;

// Créer une nouvelle fonction qui double puis incrémente
const doublePuisIncrementer = composer(incrementer, double);

// Créer une nouvelle fonction qui incrémente puis double
const incrementerPuisDouble = composer(double, incrementer);

// Test de la fonction doublePuisIncrementer
console.log(doublePuisIncrementer(2));  // (2 * 2) + 1 = 5
console.log(doublePuisIncrementer(3));  // (3 * 2) + 1 = 7

// Test de la fonction incrementerPuisDouble
console.log(incrementerPuisDouble(2));  // (2 + 1) * 2 = 6
console.log(incrementerPuisDouble(3));  // (3 + 1) * 2 = 8
