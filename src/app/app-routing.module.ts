import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'ejercicios', component: EjerciciosComponent},
  {path:'quiensoy', component: QuiensoyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
