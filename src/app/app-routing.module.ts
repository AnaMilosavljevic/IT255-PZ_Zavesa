import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RepertoarComponent } from './repertoar/repertoar.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { MojeRezervacijeComponent } from './moje-rezervacije/moje-rezervacije.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'repertoar', component: RepertoarComponent },
  { path: 'rezervacija/:id', component: RezervacijaComponent },
  { path: 'moje-rezervacije', component: MojeRezervacijeComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
