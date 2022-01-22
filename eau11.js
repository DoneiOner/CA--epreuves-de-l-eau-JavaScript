/*     Différence minimum absolue

Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres.
Nombres négatifs acceptés.


Exemples d’utilisation :
$> python exo.py 5 1 19 21
2


$> python exo.py 20 5 1 19 21
1

$> python exo.py -8 -6 4
2

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

// PSEUDO CODE :
// REMPLIR UN TABLEAU DES NOMBRES
//MINDIFF = 0
// FONCTION POUR PARCOURIR MON TABLEAU => ALIMENTER MINDIFF D'APRES LE NOMBRE FOURNI EN ARGUMENT A LA FONCTION
// BOUCLE POUR APPELER LA FONCTION DEPUIS CHAQUE INDEX DE MON TABLEAU



// GESTION D'ERREURS : 
for (let i = 2; i < process.argv.length; i++) {
    let saisie = process.argv[i];
    if ((isNaN(saisie))) {
        console.log("Erreur.");
        process.exit(0);
    }   
}
if (process.argv.length <= 3 ) {
    console.log("Erreur.");
        process.exit(0);
}



// PARSING : 
let array = [];

for (let i = 2; i < process.argv.length; i++) {
    array.push(parseInt(process.argv[i]));     
}

let minDiff = Math.abs(array[0] - array[1]);





// FONCTIONS :
function differenceBetween(n) {
    for (let i = n + 1 ; i < array.length; i++) {

        let diff = Math.abs((array[n]) - (array[i]));
        //console.log(diff);
        if (diff < minDiff) {
            minDiff = diff;
        }      
    }
    return minDiff;
}



// RESOLUTION : 
for (let n = 0; n < array.length; n++ ) {
    //console.log(array[n]);
    differenceBetween(n);
    
};

console.log(minDiff);









