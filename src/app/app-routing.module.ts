import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { path: 'etudiant-paris', component: EtudiantParisComponent },
  { path: 'etudiant-hors-paris', component: EtudiantHorsParisComponent },
  { path: 'form-etudiant', component: FormEtudiantComponent },
  { path: 'form-specialite', component: FormSpecialiteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }