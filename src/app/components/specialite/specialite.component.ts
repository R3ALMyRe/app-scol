import { Component, OnInit } from '@angular/core';
import { ISpecialite } from '../../models/ispecialite';
import { SpecServiceService } from '../../services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent implements OnInit {
  specialite!: ISpecialite[];

  constructor(private etudiantService: SpecServiceService) { }

  ngOnInit() {
    this.specialite = this.etudiantService.getSpecialite();
    console.log(this.specialite);
  }
}

