import { Component, OnInit } from '@angular/core';
import { SpecServiceService } from '../../services/spec-service.service';
import { ISpecialite } from '../../models/ispecialite';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styleUrl: './form-specialite.component.css'
})
export class FormSpecialiteComponent {
  RechercheValeur: string = '';
  specialite: ISpecialite[] = [];
  filteredSpecialite: ISpecialite[] = [];

  constructor(private Specialite: SpecServiceService) { }

  ngOnInit() {
    this.specialite = this.Specialite.getSpecialite();
    this.filteredSpecialite = [];
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    if (this.RechercheValeur && this.RechercheValeur.trim() !== '') {
      this.filteredSpecialite = this.specialite.filter(specialite =>
        specialite._libelle.includes(this.RechercheValeur)
      );
    } else {
      this.filteredSpecialite = this.specialite;
    }
  }
}