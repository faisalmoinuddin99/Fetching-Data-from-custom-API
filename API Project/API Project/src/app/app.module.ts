import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MetaDataApiService } from './services/meta-data-api.service'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [MetaDataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
