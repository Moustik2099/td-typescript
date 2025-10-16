"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
var ListePersonnes = /** @class */ (function () {
    function ListePersonnes(personnes) {
        this.personnes = personnes;
    }
    // Getters
    ListePersonnes.prototype.getPersonnes = function () {
        return this.personnes;
    };
    // Setters
    ListePersonnes.prototype.setPersonnes = function (personnes) {
        this.personnes = personnes;
    };
    // 3. findByNom
    ListePersonnes.prototype.findByNom = function (s) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.getNom() === s) {
                return p;
            }
        }
        return null;
    };
    // 4. findByCodePostal
    ListePersonnes.prototype.findByCodePostal = function (cp) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            for (var _b = 0, _c = p.getAdresses(); _b < _c.length; _b++) {
                var a = _c[_b];
                if (a.getCodePostal() === cp) {
                    return true;
                }
            }
        }
        return false;
    };
    // 5. countPersonneVille
    ListePersonnes.prototype.countPersonneVille = function (ville) {
        var count = 0;
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.getAdresses().some(function (a) { return a.getVille() === ville; })) {
                count++;
            }
        }
        return count;
    };
    // 6. editPersonneNom
    ListePersonnes.prototype.editPersonneNom = function (oldNom, newNom) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.getNom() === oldNom) {
                p.setNom(newNom);
            }
        }
    };
    // 7. editPersonneVille
    ListePersonnes.prototype.editPersonneVille = function (nom, newVille) {
        for (var _i = 0, _a = this.personnes; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.getNom() === nom) {
                for (var _b = 0, _c = p.getAdresses(); _b < _c.length; _b++) {
                    var adresse = _c[_b];
                    adresse.setVille(newVille);
                }
            }
        }
    };
    return ListePersonnes;
}());
exports.ListePersonnes = ListePersonnes;
