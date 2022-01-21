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

let string = process.argv[2];
let substring = process.argv[3];

string.includes(substring) ? console.log(true) : console.log(false);