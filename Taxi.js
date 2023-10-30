
class Passager {
    constructor(prenom, santeMentale){
        this.prenom = prenom;
        this.santeMentale = 10;
    }
    deviensFou(){
        this.santeMentale =- 1
    }
}
class Trajet {
    constructor(){
        this.feuRouge = 30
        this.radio = [" Anissa", " Freed from desire", " Rasputin", " God save the queen", " Welcome to Funky Town" ]
        this.sorsDuTaxi = 0
    }
    musiqueAleatoire() {
        let aleat = Math.floor(Math.random() * this.radio.length)
        return this.radio[aleat]
    }
}
let john = new Passager ("John", 10)
let trajet = new Trajet ()

while (john.santeMentale > 0 && trajet.feuRouge > 0){
    let music = trajet.musiqueAleatoire()
    console.log ("Arrêt n°" + trajet.feuRouge + " , actuellement à l'écoute : " + music + " santé mentale de John : " + john.santeMentale)
    if (music === "Anissa"){
        john.santeMentale -= 1;
        trajet.sorsDuTaxi += 1;
    }

    trajet.feuRouge -= 1;

    if (john.santeMentale === 0) {
        console.log ("John est mort !! Il n'en pouvait plus et s'est jeté du taxi en marche.")
        break;
    }

    if (trajet.feuRouge === 0){
        console.log("John est arrivé chez lui en vie et avec toute son audition ! Il a fait :" + trajet.sorsDuTaxi + "changement de taxi.")
    }
}



