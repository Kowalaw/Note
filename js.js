//ciblé un élément html via le JS
let elementViaId = document.getElementById("id de l'élément ciblé")
//séléctionne un élément via son id

let elementViaCSS = document.querySelector("#class div")
//selectionn un élément en le ciblant de la même manière qu'avec du css

let elementsViaCSS = document.querySelectorAll("#class div")
//idem que pour la méthode précédente 
//sauf que la on séléctionnera tout les élément qui correspondent et non pas un

//condition
if(condition){
    //ce qu'il se passe si la condition est remplis
} else{
    //sinon
}
//condition a choix multiple
switch(élémentSoummiAUneCondition){
    case premiercas:
        //alors ce code s'enclanche
        break//on finalise case par un break
    case secondcar:
        //code 
        break
    case autantquevousvoulé:
        //code
        break
    default:
        //sinon, si aucune condition n'est valide c'est ce code qui s'exécute
        break
}

//boucle
for(let i;conditionDeRépétitionDeLaBoucle + i;ceQuilSePasseAChaqueBoucle){
    //on comment avec un compteur ici définit par une varriable i
    //notre boucle s'éxécute a l'infini tant que la condition n'est pas rempls
    //par exemple i<5 tant que notre indice i est inférieur a 5 la boucle s'exécute
    //et le 3eme élément de notre boucle c'est ce qu'il se passe lors du déclenchement de la boucle
    //sa peut être i++ pour crée un compteur affin que notre boucle ne soit limité 
}
//boucle infinie
let i2 //on défini notre élément de compteur en amont
while (i2+conditionDeRépétitionDeLaBoucle){
    //la boucle
    //ce qu'il se passe a chaque boucle par rapport a notre compteur sera noté dans ce code, 
    //le compteur peut augmenté ou diminué selon l'interaction avec l'utilisateur 
    //et la boucle peut donc être infini
}

Tableau.forEach(valeurcourente => {
    //forRach appelle une fonction qui sera appliqué pour chaque élément que compose un tableau
    //suivi donc de la fonction qu'on va appeler pour les fameux élément 
});