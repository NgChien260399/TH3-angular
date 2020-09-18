import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { SearchComponent } from './search/search.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './b1tl/header/header.component';
import { MainComponent } from './b1tl/main/main.component';
import { FooterComponent } from './b1tl/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    AccordionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
