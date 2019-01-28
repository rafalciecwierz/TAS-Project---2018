import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmListComponent } from './film-list/film-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  { path: '', component: FilmListComponent, pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent},
  { path: 'signup', component: UserSignupComponent},
  { path: 'movie/:id', component: FilmDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
