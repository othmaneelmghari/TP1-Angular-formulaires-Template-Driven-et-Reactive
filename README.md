## TP 1 : Angular – Formulaires


## Question de réflexion

Template-Driven : la logique est écrite dans le template avec ngModel et des attributs HTML (required, min...). Le code est court et rapide à écrire, mais le formulaire est difficile à tester unitairement. La validation est asynchrone par rapport au cycle de vie, et les cas complexes (champs dynamiques, validations croisées) deviennent vite lourds.

Reactive Forms : le modèle (FormGroup, FormControl) est défini en TypeScript, et le template ne fait que s'y lier. Il est explicite, typé, testable facilement et réutilisable. Il gère bien les validateurs personnalisés, les champs dynamiques (FormArray) et les réactions aux changements (valueChanges), au prix d'un code un peu plus verbeux.

## Quand choisir l'un ou l'autre ?

Template-Driven convient aux formulaires simples et peu nombreux : login, contact, prototype rapide.
Reactive convient aux formulaires complexes ou dynamiques : validations croisées (mot de passe/confirmation), formulaires en plusieurs étapes, ou quand on veut des tests unitaires. C'est aussi le choix généralement recommandé pour les applications professionnelles de grande taille.
