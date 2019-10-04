import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule} from '@angular/common/http';
import { SearcharticleComponent } from './searcharticle/searcharticle.component';
//  import {DataViewModule} from 'primeng/dataview';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import {SidebarModule} from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    MenuComponent,
    DisplayComponent,
    SearcharticleComponent,
    SidebarComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SidebarModule,
    BrowserAnimationsModule


    //  DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
