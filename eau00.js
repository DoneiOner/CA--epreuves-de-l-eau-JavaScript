/* Combinaisons de 3 chiffres

Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant. 
La répétition est volontaire.


Exemples d’utilisation :
$> python exo.py
012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
$>

987 n’est pas là parce que 789 est présent.

020 n’est pas là parce que 0 apparaît deux fois.

021 n’est pas là parce que 012 est présent.

000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.
*/

/*
// PARSING
let tableauDesNombres = [];
let tableau2 = [];
let tableau3 = [];
function threeDigits (n) {
    if (n < 10){
            return ('00' + n );
    }
    else if (n < 100) {
                return ('0' +n );
            }
    return (n < 100 ? '0' : '') + n ;
}
for (let i = 0; i < 1000; i++) {
    tableauDesNombres.push(threeDigits(i));
}
//console.log(tableauDesNombres);

// ici , j'obtiens un tableau[] avec tous les nombres de 000 a 999 SANS tous les nombres à doublons : 
for (let j = 0; j < tableauDesNombres.length; j++) {
let a = tableauDesNombres[j].slice(0, 1);
//console.log(a);
let b = tableauDesNombres[j].slice(1, 2);
//console.log(b);
let c = tableauDesNombres[j].slice(2, 3);
//console.log(c);
if ( a != b && a != c && b !=c) {
    tableau2.push(threeDigits(j));

}
}
console.log(tableau2);
tableau3 = tableau2;

// je rajoute une condition pour eliminer les autres "doublons": ex 012 et 021 pour remplit un troisieme tableau
for (let index1 = 0; index1 < tableau2.length; index1++) {
let a = tableau2[index1].slice(0, 1);
//console.log(a);
let b = tableau2[index1].slice(1, 2);
//console.log(b);
let c = tableau2[index1].slice(2, 3);
//console.log(c);
    for (let index2 = 0; index2 < tableau3.length; index2++) {
        let d = tableau3[index2].slice(0, 1);
        //console.log(d);
        let e = tableau3[index2].slice(1, 2);
        //console.log(e);
        let f= tableau3[index2].slice(2, 3);
        //console.log(f);
        if ((( a == d ) || ( a == e ) || ( a == f )) && (( b == d ) || ( b == e ) || ( b == f )) && (( c == d ) || ( c == e ) || ( c == f))) {
            tableau3.splice(index1, index1);

        }
    }
    
}
console.log(tableau3);

*/

// Déclaration des variables avec toutes les valeurs dans un tableau
let a,b,c = ["0","1","2","3","4","5","6","7","8","9"]

// Première boucle qui parcourt le tableau pour afficher le premier chiffre demande
for(a=0;a<=9;a++)

// Deuxième boucle qui parcourt le tableau pour afficher le deuxième chiffre demande
    for(b=a+1;b<=9;b++)

// Troisième boucle qui parcourt le tableau pour afficher le troisième chiffre demande

        for(c=b+1;c<=9;c++)
        
// Affichage du résultat       
        console.log(a,b,c); 