/*     Index wanted

Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. 
Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.


Exemples d’utilisation :
$> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
6


$> python exo.py test test test
0

$> python exo.py test boom
-1

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/

// PSEUDO CODE :
// JE FAIS MON PARSING, AVEC UN TABLEAU DES ARGUMENTS, ET UNE CONST DU DERNIER ARGUMENT

// JE PARCOURE MON TABLEAU EN COMPARANT AVEC MA CONST
// J'AFFICHE L'INDEX DE LA STRING RETROUVEE
// OU "-1"


// GESTION D'ERREURS :
if ( process.argv[3] == null ) {
    console.log("Erreur.");
    process.exit(0);
}
// PARSING: 
let array = [];

for (let i = 2; i < process.argv.length-1; i++) {
    array.push(process.argv[i]);    
}
let wanted = process.argv[process.argv.length-1];
//console.log(array);
//console.log(wanted);

// RESOLUTION : 
for (let i = 0; i < array.length; i++) {
    if (array[i] == wanted) {
        console.log(i);
        process.exit(0);
    }    
}
console.log("-1");