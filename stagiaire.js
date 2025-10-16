"use strict";
//Stagiaire Q1
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
var Stagiaire = /** @class */ (function () {
    function Stagiaire(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    //getter et setter Q2
    Stagiaire.prototype.getNom = function () {
        return this.nom;
    };
    Stagiaire.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Stagiaire.prototype.getNote = function () {
        return this.note;
    };
    Stagiaire.prototype.setNote = function (note) {
        this.note = note;
    };
    //methodes Q3
    Stagiaire.prototype.calculMoyenne = function () {
        if (this.note.length === 0)
            return 0;
        var somme = this.note.reduce(function (acc, curr) { return acc + curr; }, 0);
        return somme / this.note.length;
    };
    ///Max Min Q4
    Stagiaire.prototype.trouverMax = function () {
        if (this.note.length === 0)
            return 0;
        return Math.max.apply(Math, this.note);
    };
    Stagiaire.prototype.trouverMin = function () {
        if (this.note.length === 0)
            return 0;
        return Math.min.apply(Math, this.note);
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
