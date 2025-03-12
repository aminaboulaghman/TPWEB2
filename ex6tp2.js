//exercice 6 tp2

function affichercarre(n) {
    return n * n;
}

console.log(affichercarre(2)); 

function executerFonction(affichercarre, n) {
    return affichercarre(n); 
}

console.log(executerFonction(affichercarre, 5)); 
console.log(executerFonction(affichercarre, 9)); 
