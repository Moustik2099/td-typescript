//Stagiaire Q1

export class Stagiaire {
    private nom: string;
    private note: number[];

    constructor(nom: string, note: number[]) {
        this.nom = nom;
        this.note = note;
    }
    //getter et setter Q2
    public getNom(): string {
        return this.nom;
    }
    public setNom(nom: string): void {
        this.nom = nom;
    }
    public getNote(): number[] {
        return this.note;
    }
    public setNote(note: number[]): void {
        this.note = note;
    }
//methodes Q3
public calculMoyenne(): number{
    if (this.note.length === 0) return 0; 
        
        const somme = this.note.reduce((acc, curr) => acc + curr, 0);
        return somme / this.note.length;
    }

///Max Min Q4
    public trouverMax():number {
        if(this.note.length === 0) return 0;
        return Math.max(...this.note)
    }
    public trouverMin():number {
        if(this.note.length === 0) return 0;
        return Math.min(...this.note)
    }
}

