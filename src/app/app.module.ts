import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaginasModule } from './paginas/paginas.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PaginasModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

