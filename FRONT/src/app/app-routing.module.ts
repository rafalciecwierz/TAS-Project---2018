import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmListComponent } from './film-list/film-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MoviesControlComponent } from './admin-panel/movies-control/movies-control.component';
import { GenresControlComponent } from './admin-panel/genres-control/genres-control.component';
import { MoviesAddComponent } from './admin-panel/movies-add/movies-add.component';

const routes: Routes = [
  { path: '', component: FilmListComponent, pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent},
  { path: 'signup', component: UserSignupComponent},
  { path: 'movie/:id', component: FilmDetailComponent},
  { path: 'admin', component: AdminPanelComponent, children: [
    { path: 'movies', component: MoviesControlComponent, children: [
      { path: '', component: MoviesAddComponent},
    ] },
    { path: 'genres', component: GenresControlComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
