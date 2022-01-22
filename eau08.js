/*     Chiffres only

Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.


Exemples d’utilisation :
$> python exo.py “4445353”
true


$> python exo.py 42
true

$> python exo.py “Bonjour 36”
false

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

// PSEUDO CODE :
// REMPLIR UN TABLEAU AVEC CHAQUE CARACTERE EN ARGUMENT
// PARCOURIR MON TABLEAU, COMPARER (ISNAN), RETOURNER FALSE SI !ISNAN SINON SI BOUCLE COMPLETE : AFFICHER TRUE


// GESTION D'ERREURS : 
if (process.argv[2] == null || (process.argv.length > 3)) {
    console.log('Erreur.');
    process.exit(0);
}


// PARSING :
const saisie = process.argv[2];
let tableau = [];
for (let i = 0; i < saisie.length; i++) {
    tableau.push(saisie[i]);    
}


// RESOLUTION : 
for (let i = 0; i < tableau.length; i++) {
    if (isNaN(tableau[i])) {
        console.log ("false");
        process.exit(0);
    }
}
console.log("true");
