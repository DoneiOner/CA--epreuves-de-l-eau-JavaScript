/*     Majuscule

Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


Exemples d’utilisation :
$> python exo.py “bonjour mathilde, comment vas-tu ?!”
Bonjour Mathilde, Comment Vas-tu ?!


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments

*/


// PSEUDO CODE :
//  JE VAIS REMPLIR UN TABLEAU DES SUBSTRINGS 
// EN PARCOURANT LA SAISIE de caractere en caractere
// ENSUITE  JE VAIS AFFICHER LE PREMIER CARACTERE EN MAJUSCULE PUIS LE RESTE DE LA SUBSTRING EN MINUSCULES
// PUIS QUAND J'ARRIVE A UN ESPACE J'AFFICHE LE CARATERE SUIVANT EN MAJUSCULE



// GESTION D'ERREURS
if (process.argv[2] == null || !(isNaN(process.argv[2])) || (process.argv.length > 3)) {
    console.log('Erreur.');
    process.exit(0);
}


// PARSING
let saisie = process.argv[2];
let substring = [];
let n = 0;
let enMajuscule = true;

for (let i = 0; i < saisie.length; i++) {
        substring.push(saisie[i])
}


// FONCTIONS
function majuscule(char, i) {
    if (enMajuscule == true) {
        process.stdout.write(char.toUpperCase());
        enMajuscule = false;
    } else {
        process.stdout.write(char);
    }

    }


// RESOLUTION
for (let i = 0; i < substring.length; i++) {
    if (substring[i-1] == " ") {
        enMajuscule = true;        
    }
   majuscule(substring[i], i);
}
console.log('');
    









