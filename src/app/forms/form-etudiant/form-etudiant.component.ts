import { Component, OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
import { IEtudiant } from '../../models/ietudiant';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  RechercheValeur: string = '';
  etudiants: IEtudiant[] = [];
  filteredEtudiants: IEtudiant[] = [];

  constructor(private etudiantService: EtudiantServiceService) { }

  ngOnInit() {
    this.etudiants = this.etudiantService.getEtudiants();
    this.filteredEtudiants = [];
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    if (this.RechercheValeur && this.RechercheValeur.trim() !== '') {
      this.filteredEtudiants = this.etudiants.filter(etudiant =>
        etudiant._nom.includes(this.RechercheValeur) ||
        etudiant._prenom.includes(this.RechercheValeur) ||
        etudiant._rue.includes(this.RechercheValeur) ||
        etudiant._cp.includes(this.RechercheValeur) ||
        etudiant._ville.includes(this.RechercheValeur) ||
        etudiant._courriel.includes(this.RechercheValeur) ||
        etudiant._genre.includes(this.RechercheValeur) ||
        etudiant._age.toString().includes(this.RechercheValeur) ||
        etudiant._idCand.toString().includes(this.RechercheValeur)
      );
    } else {
      this.filteredEtudiants = this.etudiants;
    }
  }
}