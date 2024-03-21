import { ISpecialite } from "./ispecialite";

export class Specialite implements ISpecialite {
    constructor(
        public _libelle: string,
        public _idSpec: number
    ){}

    // Accesseur et mutateur pour le libellé
    get libelle(): string {
        return this._libelle;
    }

    set libelle(libelle: string) {
        this._libelle = libelle;
    }

    // Accesseur et mutateur pour l'identifiant de spécialité
    get idSpec(): number {
        return this._idSpec;
    }

    set idSpec(idSpec: number) {
        this._idSpec = idSpec;
    }
}
