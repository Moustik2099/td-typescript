import { Personne } from "./Personne";
import { Adresse } from "./Adresse";

export class ListePersonnes {
    private personnes: Personne[];

    constructor(personnes: Personne[]) {
        this.personnes = personnes;
    }

    // Getters
    getPersonnes(): Personne[] {
        return this.personnes;
    }

    // Setters
    setPersonnes(personnes: Personne[]): void {
        this.personnes = personnes;
    }

    // 3. findByNom
    findByNom(s: string): Personne | null {
        for (let p of this.personnes) {
            if (p.getNom() === s) {
                return p;
            }
        }
        return null;
    }

    // 4. findByCodePostal
    findByCodePostal(cp: string): boolean {
        for (let p of this.personnes) {
            for (let a of p.getAdresses()) {
                if (a.getCodePostal() === cp) {
                    return true;
                }
            }
        }
        return false;
    }

    // 5. countPersonneVille
    countPersonneVille(ville: string): number {
        let count = 0;
        for (let p of this.personnes) {
            if (p.getAdresses().some(a => a.getVille() === ville)) {
                count++;
            }
        }
        return count;
    }

    // 6. editPersonneNom
    editPersonneNom(oldNom: string, newNom: string): void {
        for (let p of this.personnes) {
            if (p.getNom() === oldNom) {
                p.setNom(newNom);
            }
        }
    }

    // 7. editPersonneVille
    editPersonneVille(nom: string, newVille: string): void {
        for (let p of this.personnes) {
            if (p.getNom() === nom) {
                for (let adresse of p.getAdresses()) {
                    adresse.setVille(newVille);
                }
            }
        }
    }
}