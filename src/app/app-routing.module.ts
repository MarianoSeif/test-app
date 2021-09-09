import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginT1Component } from './components/login-t1/login-t1.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'ejercicios', component: EjerciciosComponent},
  {path:'quiensoy', component: QuiensoyComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'casa', component: ErrorComponent},
  {path:'login2', component: LoginT1Component},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
