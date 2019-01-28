import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmListComponent } from './film-list/film-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { FilmItemComponent } from './film-list/film-item/film-item.component';
import { FilmServices } from './shared/film.services';
import { FilmDetailComponent } from './film-detail/film-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmListComponent,
    UserLoginComponent,
    UserSignupComponent,
    FilmItemComponent,
    FilmDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilmServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
