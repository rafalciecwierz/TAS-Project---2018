import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmListComponent } from './film-list/film-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { FilmItemComponent } from './film-list/film-item/film-item.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MoviesAddComponent } from './admin-panel/movies-add/movies-add.component';
import { MoviesControlComponent } from './admin-panel/movies-control/movies-control.component';
import { GenresControlComponent } from './admin-panel/genres-control/genres-control.component';

//services
import { FilmServices } from './shared/film.services';
import { UserDataService } from './shared/user-data.service';
import { UsernameService } from './shared/username.service';
import { GenresItemComponent } from './admin-panel/genres-item/genres-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmListComponent,
    UserLoginComponent,
    UserSignupComponent,
    FilmItemComponent,
    FilmDetailComponent,
    AdminPanelComponent,
    MoviesControlComponent,
    GenresControlComponent,
    MoviesAddComponent,
    GenresItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FilmServices,UserDataService, UsernameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
