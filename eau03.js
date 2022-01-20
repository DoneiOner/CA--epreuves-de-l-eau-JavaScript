/*     Suite de Fibonacci

Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite 
et le premier élément étant à l’index 0.


Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.
*/

// la suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent.

//alimenter un tableau de suite de fibonacci jusqu'au nombre saisi
//afficher la valeur a l'[index saisi -1]

//gestion d'erreurs
if (process.argv[2] == null || isNaN(process.argv[2]) || Math.sign(process.argv[2]) == -1 || process.argv[3] != null){
    console.log("-1");
    return;
}

let tableau = [0, 1];
let saisie = process.argv[2];
for (let index = 2; index <= saisie; index++) {
    n = (tableau[index-2]+tableau[index-1]);
    tableau.push(n);
}
//console.log(tableau);
console.log(tableau[saisie]);

