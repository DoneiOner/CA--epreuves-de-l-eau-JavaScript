/* Combinaisons de 2 nombres

Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
*/
function twoDigits (n) {
    return (n < 10 ? '0' : '') + n ;
}




for (let index = 0; index <= 99; index++) {
    for (let index2 = 1; index2 <= 99; index2++) {
        console.log(twoDigits(index) + ' ' +twoDigits(index2));

        
    };
    
}