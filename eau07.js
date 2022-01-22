/*     Majuscule

Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


Exemples d’utilisation :
$> python exo.py “bonjour mathilde, comment vas-tu ?!”
Bonjour Mathilde, Comment Vas-tu ?!


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments

*/
console.log(process.argv.length);
// GESTION D'ERREURS
if (process.argv[2] == null || !(isNaN(process.argv[2])) || (process.argv.length > 3)) {
    console.log('Erreur.');
    process.exit(0);
}


// PARSING

let saisie = process.argv[2];
//console.log(process.argv[2]);
let substring = [];
let n = 0;
let enmajuscule = true;

//  JE VAIS REMPLIR UN TABLEAU DES SUBSTRINGS 
// EN PARCOURANT LA SAISIE de caractere en caractere
//console.log(saisie[2]);
for (let i = 0; i < saisie.length; i++) {
        substring.push(saisie[i])
}
console.log(substring);


// ENSUITE  JE VAIS AFFICHER LE PREMIER CARATERE EN MAJUSCULE PUIS LE RESTE DE LA SUBSTRING EN MINUSCULES
// PUIS QUAND J'ARRIVE A UN ESPACE J'AFFICHE LE CARATERE SUIVANT EN MAJUSCULE
function majuscule(char, i) {
    if (enmajuscule == true) {
        process.stdout.write(char.toUpperCase());
        enmajuscule = false;
    } else {
        process.stdout.write(char);
    }

    }

for (let i = 0; i < substring.length; i++) {
    if (substring[i-1] == " ") {
        enmajuscule = true;        
    }
   majuscule(substring[i], i);
}
    









//for (let index = 2; index < array.length; index++) {
//arrayOfStrings[index-2] = array[index];
//}

// RESOLUTION
/*
function isInitiale(substring) {
    if (substring.charAt(0)) { 
            return true ;
        } else {
            return false;
        }
    }

    function tableauSubstrings(){
        for (let index = 0; index < arrayOfStrings.length; index++) {
            let substrings = [];
            substrings.push(arrayOfStrings[index]);
            console.log(substrings);

    }
}
tableauSubstrings();

function resolution(string) {
    for (let i = 0; i < array.length; i++) {        
    }
    process.stdout.write(string.charAt(0).toUpperCase());
     for (let index = 1; index < string.length; index++) {
         //console.log(string.length);
                process.stdout.write(string[index].toLowerCase());
            }
        }



resolution("abcabcabc  defdef");
  console.log('');
*/