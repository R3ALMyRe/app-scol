import { Component, OnInit } from '@angular/core';
import { IEtudiant } from '../../models/ietudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrl: './etudiant-paris.component.css'
})
export class EtudiantParisComponent implements OnInit {
  etudiants!: IEtudiant[];

  constructor(private etudiantService: EtudiantServiceService) { }

  ngOnInit() {
    this.etudiants = this.etudiantService.getEtudiants();
    this.etudiants = this.etudiants.filter(etudiant => etudiant._ville === 'Paris');
  }
}