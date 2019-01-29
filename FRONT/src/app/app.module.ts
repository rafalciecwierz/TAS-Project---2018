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

//services
import { FilmServices } from './shared/film.services';
import { UserDataService } from './shared/user-data.service';

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
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FilmServices,UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
