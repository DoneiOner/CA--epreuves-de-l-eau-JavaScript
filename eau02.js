/* Paramètres à l’envers

Créez un programme qui affiche ses arguments reçus à l’envers.


Exemples d’utilisation :
$> python exo.py “Suis” “Je” “Drôle”
Drôle
Je
Suis


$> python exo.py ha ho
ho
ha

$> python exo.py “Bonjour 36”
Bonjour 36

Afficher error et quitter le programme en cas de problèmes d’arguments.
*/


// gestion des erreurs
if (process.argv.length < 3)  {
    console.log("Erreur.");
    return
}




// parsing
tableau = [];
for (i=2; i<process.argv.length; i++) {
    tableau.push(process.argv[i]);
}




// resolution
for (let index = tableau.length -1; index >= 0 ; index--) {
   
   let word = tableau[index];
   //console.log(word);
   process.stdout.write(word.toString() + " ");    
}
console.log('');