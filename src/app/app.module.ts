import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieContainerComponent } from './movies/movie-container/movie-container.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { ApikeyInterceptor } from './_interceptors/apikey.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieDetailsComponent,
    MovieContainerComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    PaginationModule.forRoot(),
    RatingModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApikeyInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
