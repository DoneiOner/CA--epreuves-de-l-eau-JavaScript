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