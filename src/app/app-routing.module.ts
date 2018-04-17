import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import {PrivatePageComponent} from './componentes/private-page/private-page.component';
import {NoFoundPageComponent } from './componentes/no-found-page/no-found-page.component';


const routes: Routes = [

  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'private', component: PrivatePageComponent},
  {path: '**', component: NoFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
