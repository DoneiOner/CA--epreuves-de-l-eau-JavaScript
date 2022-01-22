/*     Prochain nombre premier

Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.


Exemples d’utilisation :
$> python exo.py 14
17
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/

// ACQUISITION DE L'ARGUMENT
let args = process.argv



// GESTION D'ERREURS
// Condition qui gère l'absence d'argument ou un argument en trop ou un argument non numerique  ou un argument négatif
if(args[2] === undefined || process.argv.length > 3  ) {
    console.log("Entrez un seul nombre !");
     process.exit(0)
} else if (isNaN(parseInt(args[2])) ||  args[2] < 0) {
    console.log("Entrez un entier POSITIF !")
    process.exit(0)
}


// PARSING
let N = parseInt(args[2])



// FONCTIONS

function nbrPremier(N) {    
    for(var i = 2; i <= Math.sqrt(N); i++) {    
        if(N%i === 0) {
            return false ;
        }
        
        return N > 1 ;
    } 
}


function findPremier(N) {
    while (nbrPremier(N) === false) {
        N++
    }
    console.log("Le nombre premier supérieur est "+N);}



// RESOLUTION

findPremier(N+1);