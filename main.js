"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Adresse_1 = require("./Adresse");
var Personne_1 = require("./Personne");
var ListePersonnes_1 = require("./ListePersonnes");
var a1 = new Adresse_1.Adresse("Rue A", "Paris", "75001");
var a2 = new Adresse_1.Adresse("Rue B", "Lyon", "69000");
var a3 = new Adresse_1.Adresse("Rue C", "Paris", "75002");
var p1 = new Personne_1.Personne("Alice", "F", [a1]);
var p2 = new Personne_1.Personne("Bob", "M", [a2, a3]);
var liste = new ListePersonnes_1.ListePersonnes([p1, p2]);
console.log(liste.findByNom("Alice")); // Personne Alice
console.log(liste.findByCodePostal("69000")); // true
console.log(liste.countPersonneVille("Paris")); // 2
liste.editPersonneNom("Bob", "Robert");
liste.editPersonneVille("Robert", "Marseille");
console.log(liste.getPersonnes());
