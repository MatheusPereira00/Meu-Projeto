import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DiretivaDirective } from './directive/diretiva.style';
import { Page1Component } from './page1/page1.component';
import { HeaderComponent } from './header/header.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FooterComponent } from './footer/footer.component';
import { DiretivaStrucDirective } from './directive/diretiva-struc';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiretivaDirective,
    Page1Component,
    HeaderComponent,
    Page2Component,
    Page3Component,
    FooterComponent,
    DiretivaStrucDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
