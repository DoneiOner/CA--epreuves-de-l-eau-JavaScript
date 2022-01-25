/*     Par ordre Ascii

Créez un programme qui trie les éléments donnés en argument par ordre ASCII.


Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo


$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.

*/


//PSEUDO CODE

// même algorithme que celui de l'exo 13, "tri par selection",
// sauf qu'au lieu de comparer des arguments, on compare la valeur ascii du premier caractere des arguments
//(modifier aussi les gestions d'erreurs)



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
     
}
if (process.argv.length <= 3 ) {
    console.log("Erreur.");
    process.exit(0);
}





// FONCTIONS
function my_select_sort(array) {
    
    let min = (array[0]);
    console.log(min + " : charcode of min");
	
	for (let i = 0; i < array.length; i++) {
        console.log("charcode of index = "+ parseInt(array[i].charCodeAt(0)))	;	
        if (parseInt(array[i].charCodeAt(0)) <= (parseInt(min.charCodeAt(0)))){
            min = (array[i]);					
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
    process.stdout.write(newArray[index] + " " ); 
}
console.log("");
