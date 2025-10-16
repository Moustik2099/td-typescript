"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, sexe, adresses) {
        this.nom = nom;
        this.sexe = sexe;
        if (sexe !== 'M' && sexe !== 'F') {
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
        this.adresses = adresses;
    }
    // Getters
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.getSexe = function () {
        return this.sexe;
    };
    Personne.prototype.getAdresses = function () {
        return this.adresses;
    };
    // Setters
    Personne.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Personne.prototype.setSexe = function (sexe) {
        if (sexe !== 'M' && sexe !== 'F') {
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
        this.sexe = sexe;
    };
    Personne.prototype.setAdresses = function (adresses) {
        this.adresses = adresses;
    };
    Personne.prototype.ajouterAdresse = function (adresse) {
        this.adresses.push(adresse);
    };
    return Personne;
}());
exports.Personne = Personne;
