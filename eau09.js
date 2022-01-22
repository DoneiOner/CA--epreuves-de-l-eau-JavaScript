/*     Entre min et max

Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24


$> python exo.py 25 20
20 21 22 23 24

$> python exo.py hello
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

//  PSEUDO CODE : 

// PARSER MIN ET MAX

// FAIRE UNE BOUCLE ENTRE MIN ET MAX
// AFFICHER CHAQUE NOMBRE DANS L'INTERVALLE, SAUF LE MAX 


// GESTION D'ERREURS : 
if (process.argv[2] == null || (isNaN(process.argv[2])) || (isNaN(process.argv[3])) || (process.argv.length > 4)) {
    console.log('Erreur.');
    process.exit(0);
}
//console.log(process.argv[2]);
// PARSING:
let min = process.argv[2];
let max = process.argv[3];

if ( process.argv[2] > process.argv[3] ) {
     min = process.argv[3];
     max = process.argv[2];
}

// RESOLUTION :
for (let i = min; i < max; i++) {
    process.stdout.write(i + " ");    
}
console.log(" ");