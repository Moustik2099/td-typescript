import { Stagiaire } from "./stagiaire";

//Formation Q5

export class Formation {
    constructor(private intitule: string, private nbJour:number , private stagiaires: Stagiaire[]) {
        this.intitule = intitule;
        this.nbJour = nbJour;
        this.stagiaires = stagiaires;
    }
//getter et setter 

    public getIntitule(): string {
        return this.intitule;
    }
    public setIntitule(intitule: string): void {
        this.intitule = intitule;
    }
    public getNbJour(): number {
        return this.nbJour;
    }
    public setNbJour(nbJour: number): void {
        this.nbJour = nbJour;
    }
    public getStagiaires(): Stagiaire[] {
        return this.stagiaires;
    }
    public setStagiaires(stagiaires: Stagiaire[]): void {
        this.stagiaires = stagiaires;
    }

//Moyeene formation Q6

    public calculerMoyenneFormation(): number {
        if (this.stagiaires.length === 0) return 0;
        const sommeMoyennes = this.stagiaires.reduce((somme, stagiaire) => somme + stagiaire.calculMoyenne(), 0);
        return sommeMoyennes / this.stagiaires.length;
    }

//index max Q7

    public getIndexMax():number {
        if (this.stagiaires.length === 0) return -1;
        let indexMax = 0;
        let maxMoyenne = this.stagiaires[0].calculMoyenne();
        for (let i = 1; i < this.stagiaires.length; i++) {
            const moyenneActuelle = this.stagiaires[i].calculMoyenne(); 
            if (moyenneActuelle > maxMoyenne) {
                maxMoyenne = moyenneActuelle;
                indexMax = i;
            }
        }return indexMax;
    }
//Nom max Q8

public afficherNomMax():void {
    const indexMax = this.getIndexMax();
    if (indexMax !== -1) {
        console.log(`Le stagiaire avec la meilleure moyenne est : ${this.stagiaires[indexMax].getNom()} avec une moyenne de ${this.stagiaires[indexMax].calculMoyenne()}`);
    } else {
        console.log("Aucun stagiaire dans la formation.");
        }
        }
//Afficher min max Q9
public afficherMinMax():void {
    const indexMax= this.getIndexMax();
    if (indexMax !== -1) {
        const stagiaireMax = this.stagiaires[indexMax];
        const noteMin = stagiaireMax.trouverMin();
        console.log(`La note minimale du stagiaire ${stagiaireMax.getNom()} est : ${noteMin}`);
    } else {
        console.log("Aucun stagiaire dans la formation.");
    }
}
//Moyenne par nom Q10
public afficherMoyenneParNom(nom:string):void {
    const stagiaireTrouve= this.stagiaires.find(stagiaire => stagiaire.getNom.toLowerCase()===nom.toLowerCase());
    if (stagiaireTrouve) {
        console.log(`La moyenne de ${stagiaireTrouve.getNom()} est : ${stagiaireTrouve.calculMoyenne()}`);
    } else {
        console.log(`Stagiaire avec le nom ${nom} non trouvé.`);
}
}
}