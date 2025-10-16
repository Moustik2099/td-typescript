"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
//Formation Q5
var Formation = /** @class */ (function () {
    function Formation(intitule, nbJour, stagiaires) {
        this.intitule = intitule;
        this.nbJour = nbJour;
        this.stagiaires = stagiaires;
        this.intitule = intitule;
        this.nbJour = nbJour;
        this.stagiaires = stagiaires;
    }
    //getter et setter 
    Formation.prototype.getIntitule = function () {
        return this.intitule;
    };
    Formation.prototype.setIntitule = function (intitule) {
        this.intitule = intitule;
    };
    Formation.prototype.getNbJour = function () {
        return this.nbJour;
    };
    Formation.prototype.setNbJour = function (nbJour) {
        this.nbJour = nbJour;
    };
    Formation.prototype.getStagiaires = function () {
        return this.stagiaires;
    };
    Formation.prototype.setStagiaires = function (stagiaires) {
        this.stagiaires = stagiaires;
    };
    //Moyeene formation Q6
    Formation.prototype.calculerMoyenneFormation = function () {
        if (this.stagiaires.length === 0)
            return 0;
        var sommeMoyennes = this.stagiaires.reduce(function (somme, stagiaire) { return somme + stagiaire.calculMoyenne(); }, 0);
        return sommeMoyennes / this.stagiaires.length;
    };
    //index max Q7
    Formation.prototype.getIndexMax = function () {
        if (this.stagiaires.length === 0)
            return -1;
        var indexMax = 0;
        var maxMoyenne = this.stagiaires[0].calculMoyenne();
        for (var i = 1; i < this.stagiaires.length; i++) {
            var moyenneActuelle = this.stagiaires[i].calculMoyenne();
            if (moyenneActuelle > maxMoyenne) {
                maxMoyenne = moyenneActuelle;
                indexMax = i;
            }
        }
        return indexMax;
    };
    //Nom max Q8
    Formation.prototype.afficherNomMax = function () {
        var indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            console.log("Le stagiaire avec la meilleure moyenne est : ".concat(this.stagiaires[indexMax].getNom(), " avec une moyenne de ").concat(this.stagiaires[indexMax].calculMoyenne()));
        }
        else {
            console.log("Aucun stagiaire dans la formation.");
        }
    };
    //Afficher min max Q9
    Formation.prototype.afficherMinMax = function () {
        var indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            var stagiaireMax = this.stagiaires[indexMax];
            var noteMin = stagiaireMax.trouverMin();
            console.log("La note minimale du stagiaire ".concat(stagiaireMax.getNom(), " est : ").concat(noteMin));
        }
        else {
            console.log("Aucun stagiaire dans la formation.");
        }
    };
    //Moyenne par nom Q10
    Formation.prototype.afficherMoyenneParNom = function (nom) {
        var stagiaireTrouve = this.stagiaires.find(function (stagiaire) { return stagiaire.getNom.toLowerCase() === nom.toLowerCase(); });
        if (stagiaireTrouve) {
            console.log("La moyenne de ".concat(stagiaireTrouve.getNom(), " est : ").concat(stagiaireTrouve.calculMoyenne()));
        }
        else {
            console.log("Stagiaire avec le nom ".concat(nom, " non trouv\u00E9."));
        }
    };
    return Formation;
}());
exports.Formation = Formation;
