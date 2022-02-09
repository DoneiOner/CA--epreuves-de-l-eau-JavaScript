/*     Tri à bulle

Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_bubble_sort(array) {
	# votre algorithme
	return (new_array)
}


Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6


$> python exo.py test test test
error

Afficher error et quitter le programme en cas de problèmes d’arguments.


Wikipedia vous présentera une belle description de cet algorithme de tri.

*/

// PSEUDO CODE
// UNE BOUCLE POUR VERIFIER SI INDEX N < INDEX N+1
//                         SINON, PERMUTER ET PERMUTATION = TRUE
// AU DEBUT DE LA BOUCLE : PERMUTATION = FALSE
// TANT QUE PERMUTATION = TRUE EN FIN DE BOUCLE, LA BOUCLE CONTINUE



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


// PARSING
let array = [];
let new_array = [];
let permutation = true;

for (let i = 2; i < process.argv.length; i++) {
	array.push(parseInt(process.argv[i]));	
}



// FONCTIONS
function my_bubble_sort(array) {
	permutation = false ; 
	for (let i = 0; i < array.length; i++) {
		if ( array[i] > array[i+1] ) {
			permutation = true
			let a = array[i];
			let b = array[i+1];
						array.splice(i+1, 1, a);
			array.splice(i, 1, b);
		} 
	}
	return (array, permutation);
}


// RESOLUTION
while (permutation === true) {
my_bubble_sort(array); 
}


// AFFICHAGE
for (let i = 0; i < array.length; i++) {
	process.stdout.write(array[i] + " ");	
}
console.log('');