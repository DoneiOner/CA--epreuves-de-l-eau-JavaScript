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
    console.log("Entrez un nombre et un seul !");
     process.exit(0)
} else if (isNaN(parseInt(args[2])) ||  args[2] < 0) {
    console.log("Entrez un entier positif !")
    process.exit(0)
}


// PARSING
let N = parseInt(args[2])



// FONCTIONS

function isPrime(nombre_a_tester) {
    if ((nombre_a_tester < 2)) {
        return false;
    }
    if (nombre_a_tester == 2 ) {
        console.log('Oui, 2 est un nombre premier');
        process.exit(0);
    }
    if(nombre_a_tester%2 === 0) {
        return false;
    }

    var racine = Math.sqrt(nombre_a_tester);

    if(racine == parseInt(racine)) {
        return false;
    }

    for ( let i = 3; i<=racine; i+=2) {        
        if(nombre_a_tester%i === 0) {            
            return false;
        }        
    }

    return N;
    }


function findPremier(N) {
    while (isPrime(N) === false) {
        N++
    }
    console.log("Le nombre premier supérieur est "+N);}



// RESOLUTION

findPremier(N+1);