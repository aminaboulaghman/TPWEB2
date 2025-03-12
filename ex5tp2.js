// exercice 5 tp2
function factorielle(n) {
    if ( n <= 1 ) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}
   console.log(factorielle(5) );
