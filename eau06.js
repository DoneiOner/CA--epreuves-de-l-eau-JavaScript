/*     Majuscule sur deux

Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

// GESTION D'ERREURS
if (process.argv[2] == null || !(isNaN(process.argv[2]))) {
    console.log('Erreur.');
    process.exit(0);
}


// PARSING
let string = process.argv[2];
//console.log(string);


// FONCTIONS
function IsOdd(n) {
        if (n % 2 === 0){ return true;}
        else { return false;}
}


// RESOLUTION / AFFICHAGE

for (let index = 0; index < string.length; index++) {
    if (IsOdd(index)) {
        process.stdout.write(string[index].toUpperCase());
    } else {
        process.stdout.write(string[index].toLowerCase());
    }
    
}
console.log('');
