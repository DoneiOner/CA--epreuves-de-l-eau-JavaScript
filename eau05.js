/*     String dans string

Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.


Exemples d’utilisation :
$> python exo.py bonjour jour
true


$> python exo.py bonjour joure
false


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/
// GESTION D'ERREURS
if (process.argv[2] == undefined || process.argv[3] == undefined) {
    console.log('Erreur.');
    process.exit(0);
}

// PARSING
let string = process.argv[2];
let substring = process.argv[3];


// RESOLUTION
string.includes(substring) ? console.log(true) : console.log(false);