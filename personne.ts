import { Adresse } from "./Adresse";

export class Personne {
    private nom: string;
    private sexe: string; // 'M' ou 'F'
    private adresses: Adresse[];

    constructor(nom: string, sexe: string, adresses: Adresse[]) {
        this.nom = nom;
        this.sexe = sexe;
        if (sexe !== 'M' && sexe !== 'F') {
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
        this.adresses = adresses;
    }

    // Getters
    getNom(): string {
        return this.nom;
    }

    getSexe(): string {
        return this.sexe;
    }

    getAdresses(): Adresse[] {
        return this.adresses;
    }

    // Setters
    setNom(nom: string): void {
        this.nom = nom;
    }

    setSexe(sexe: string): void {
        if (sexe !== 'M' && sexe !== 'F') {
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
        this.sexe = sexe;
    }

    setAdresses(adresses: Adresse[]): void {
        this.adresses = adresses;
    }

    public ajouterAdresse(adresse: Adresse): void {
        this.adresses.push(adresse);
    }

    
}