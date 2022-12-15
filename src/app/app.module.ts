import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlocMainComponent } from './components/bloc-main/bloc-main.component';
import { NavComponent } from './components/nav/nav.component';
import { TextAndButtonComponent } from './components/text-and-button/text-and-button.component';
import { BlocMain2Component } from './components/bloc-main2/bloc-main2.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstBlockComponent } from './components/first-block/first-block.component';
import { GreenSectionComponent } from './components/green-section/green-section.component';
import { ProductComponent } from './components/product/product.component';
import { LastBlockComponent } from './components/last-block/last-block.component';
import { VisitedProductComponent } from './components/visited-product/visited-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlocMainComponent,
    NavComponent,
    TextAndButtonComponent,
    BlocMain2Component,
    FooterComponent,
    FirstBlockComponent,
    GreenSectionComponent,
    ProductComponent,
    LastBlockComponent,
    VisitedProductComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
