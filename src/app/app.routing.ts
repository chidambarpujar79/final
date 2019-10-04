import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { DisplayComponent } from './display/display.component';
 import { MenuComponent } from './menu/menu.component';
import { Sidebar } from 'primeng/sidebar';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { SidebarComponent } from './sidebar/sidebar.component';



const arr : Routes = [
    {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path:'display',component:DisplayComponent},
   {path:'menu',component:MenuComponent},
   {path:'pagenotfound',component:PagenotfoundComponent}


];

export const routing = RouterModule.forRoot(arr);
