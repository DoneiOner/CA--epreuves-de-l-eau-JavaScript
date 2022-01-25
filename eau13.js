/*     Tri par sélection

Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_select_sort(array) {
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



// PSEUDO CODE :
// je cree un tableau des nombres
// je le parcoure pour chercher la plus petite valeur
// je mets cette valeur a index 0
// la deuxieme plus petite valeur à index 0+1
// etc

// j'affiche le resultat

/*
// FONCTIONS :
function my_select_sort (array) {
	
	
	
	
	
	
	// determiner le plus petit nombre
	console.log(array.length);
	array.splice(index, 1);
	console.log(array);
	new_array.push(min);		
	console.log(new_array);
	console.log(length + 'ici');
	length--;
	
	//console.log(min);
}
while (length > 0) {
	my_select_sort(array);
}
*/

//console.log(new_array);
//console.log(array);


// MARDI 25 JANVIER 09h00



// PARSING
let array = [];
let newArray = [];
for (let i = 2; i < process.argv.length; i++) {
	array.push(process.argv[i]);	
}
let indexToErase;

//GESTION D'ERREURS
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


// FONCTIONS
function my_select_sort(array) {

	let min = parseInt(array[0]);
	
	for (let i = 0; i < array.length; i++) {		
		if (parseInt(array[i]) <= min) {
			min = parseInt(array[i]);					
			indexToErase = i;
			}
		}
		newArray.push(min);														
		array.splice(indexToErase, 1);
	}


//RESOLUTION
while (array.length !=0) {
my_select_sort(array);
}


//AFFICHAGE
for (let index = 0; index < newArray.length; index++) {	
	process.stdout.write(newArray[index] + " " ); // affiche l'index 0 et deux fois l'index 1, au lieu de la valeur  min
}
console.log("");










