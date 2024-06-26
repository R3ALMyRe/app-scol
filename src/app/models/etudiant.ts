import { IEtudiant } from "./ietudiant";

export class Etudiant implements IEtudiant{
    constructor(
        public _nom: string,
        public _prenom: string,
        public _rue: string,
        public _cp: string,
        public _ville: string,
        public _courriel: string,
        public _genre: string,
        public _age: number,
        public _idCand: number
    ){
      }
    
      // Accesseurs et mutateurs pour le nom
      get nom(): string {
        return this._nom;
      }
    
      set nom(nom: string) {
        this._nom = nom;
      }
    
      // Accesseurs et mutateurs pour le prénom
      get prenom(): string {
        return this._prenom;
      }
    
      set prenom(prenom: string) {
        this._prenom = prenom;
      }
    
      // Accesseurs et mutateurs pour la rue
      get rue(): string {
        return this._rue;
      }
    
      set rue(rue: string) {
        this._rue = rue;
      }
    
      // Accesseurs et mutateurs pour le code postal
      get cp(): string {
        return this._cp;
      }
    
      set cp(cp: string) {
        this._cp = cp;
      }
    
      // Accesseurs et mutateurs pour la ville
      get ville(): string {
        return this._ville;
      }
    
      set ville(ville: string) {
        this._ville = ville;
      }
    
      // Accesseurs et mutateurs pour le courriel
      get courriel(): string {
        return this._courriel;
      }
    
      set courriel(courriel: string) {
        this._courriel = courriel;
      }
    
      // Accesseurs et mutateurs pour le genre
      get genre(): string {
        return this._genre;
      }
    
      set genre(genre: string) {
        this._genre = genre;
      }
    
      // Accesseurs et mutateurs pour l'âge
      get age(): number {
        return this._age;
      }
    
      set age(age: number) {
        this._age = age;
      }
    
      // Accesseurs et mutateurs pour l'ID du candidat
      get idCand(): number {
        return this._idCand;
      }
    
      set idCand(idCand: number) {
        this._idCand = idCand;
      }
}