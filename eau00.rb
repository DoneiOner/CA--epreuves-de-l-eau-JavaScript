#!usr/bin/env ruby

=begin
    ********************** Combinaisons de 3 chiffres

    Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant,
     dans l’ordre croissant. La répétition est volontaire.

Exemples d’utilisation :
$> python exo.py
012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
$>

987 n’est pas là parce que 789 est présent. ********************************

020 n’est pas là parce que 0 apparaît deux fois.

021 n’est pas là parce que 012 est présent. *********************************

000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.

=end

let tableau_1 = []
for i in 000..999
    # rajoute des zeros devant les nombres de 0 à 99 : 
    i2 = '%03d' %i
    tableau_1 << [i2.to_s]
end
#puts tableau_1.inspect
puts tableau_1[50].inspect

# une boucle de 012..999 (remplacer 100 par "index")
string_to_test = tableau_1[50].to_s
puts string_to_test.inspect
# des conditions en comparant les int de l'index 012..999, si les conditions sont remplies on remplit un tableau
a = string_to_test[2]
b =  string_to_test[3]
c = string_to_test[4]
puts "a : #{a}. b: #{b}. c: #{c}."
# - pas deux fois les memes 3 chiffres dans des nombres
# - pas deux fois le même chiffre dans le même nombres
unless a == b || b == c || a == c
    unless 
# - exclusivement des chiffres differents dans le même nombre