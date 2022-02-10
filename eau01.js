/* Combinaisons de 2 nombres

Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/
let array = [];


function twoDigits (n) {
    return (n < 10 ? '0' : '') + n ;
}

for (let index = 0; index <= 99; index++) {
    for (let index2 = 1; index2 <= 99; index2++) {
        if (index != index2) {

            // mettre un parcours du tableau avec j avec une condition telle que si sur  index2 == deux premiers chiffres du nombredutableau[j] 
            // && index1 == deux derniers chiffres du nombre du tableau[j] alors on saute le push on ne le fait pas :
            
            
        }
        array.push(twoDigits(index)+twoDigits(index2))
    }
}
//console.log(array);

//console.log(array[10].str.substring(0, 2));
for (let j = 0; j < array.length; j++) {
    let sousChaine1 = array[j].substring(0, 2);
    //console.log(sousChaine1);
    let sousChaine2 = array[j].substring(2, 4);//attention ici on veut les char 2 et 3 !!
    for (let k = 0; k < array.length; k++) {
        let ilFautErase = false;
        let sousChaine3 = array[k].substring(0, 2);
        let sousChaine4 = array[k].substring(2, 4);
        
    
    if ( (sousChaine1 == sousChaine4 && sousChaine2 == sousChaine3) || (sousChaine1 == sousChaine2 || sousChaine3 == sousChaine4) ){
        array.splice(k, 1);
}
}
}


for (let i = 0; i < array.length; i++) {
    process.stdout.write( ' ' + array[i] + '  ');
}
console.log('');
