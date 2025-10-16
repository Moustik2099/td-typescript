import { Adresse } from "./Adresse";
import { Personne } from "./Personne";
import { ListePersonnes } from "./ListePersonnes";

const a1 = new Adresse("Rue A", "Paris", "75001");
const a2 = new Adresse("Rue B", "Lyon", "69000");
const a3 = new Adresse("Rue C", "Paris", "75002");

const p1 = new Personne("Alice", "F", [a1]);
const p2 = new Personne("Bob", "M", [a2, a3]);

const liste = new ListePersonnes([p1, p2]);

console.log(liste.findByNom("Alice")); // Personne Alice
console.log(liste.findByCodePostal("69000")); // true
console.log(liste.countPersonneVille("Paris")); // 2
liste.editPersonneNom("Bob", "Robert");
liste.editPersonneVille("Robert", "Marseille");
console.log(liste.getPersonnes());