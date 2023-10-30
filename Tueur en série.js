

class Tueur {                                                   
    constructor (){
        this.pv = 100;
    }
}

class Survivant {
    constructor (nom, probMort, probDegats, probDegatsEtMort){
        this.nom = nom;
        this.probMort = probMort;
        this.probDegats = probDegats;
        this.probDegatsEtMort = probDegatsEtMort;
    }
}

let jason = new Tueur()
let prenoms = ["Sophie", "Tina", "Antoine", "François", "Carmen"]
let caracteristiques = [[type = "Nerd", probMort = 0.3, probDegats = 0.2, probDegatsEtMort = 0.3], [type = "Sportif", probMort = 0.5, probDegats = 0.7, probDegatsEtMort = 0.6], [type = "Blonde", probMort = 0.6, probDegats = 0.5, probDegatsEtMort = 0.8], [type = "traitre", probMort  = 0.7, probDegats = 0.2, probDegatsEtMort = 0.2], [type = "hero", probMort = 0.2, probDegats = 0.8, probDegatsEtMort = 0.8] ]

let survivants = [];

for (let i = 0; i < 5 ; i ++){
    let prenomsAleat  = prenoms[Math.floor(Math.random()*prenoms.length)]
    let caractAleat = caracteristiques[Math.floor(Math.random()*caracteristiques.length)]   
    function perso(){
        return prenomsAleat + caractAleat;
    }
    survivants.push(perso())
}


while (jason.hp > 0 && survivants.length > 0){
    let action = math.random()
    
    if (action < perso.probMort){
    console.log ("Jason a tué" + perso.nom)

 }  else if (action < perso.probDegats) {
    console.log (perso.nom + " a esquivé et infligé 10pt de dégats à Jason")
    jason.hp -= 10 ;

 }  else if (action < perso.probDegatsEtMort ){
 console.log (perso.nom + " est mort mais a infligé 15pt de dégats")
jason.hp -= 15

}
}
if (jason.hp <= 0){
    console.log ("Jason est mort");
}

if (survivants.length === 0) {
    console.log ("Tous les personnages sont morts")

}