import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { TodoreportComponent } from './todo/todoreport/todoreport.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PriceupdaterComponent } from './priceupdater/priceupdater.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [//list of componet of app module
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProductlistComponent,
    TodolistComponent,
    TodoreportComponent,InventoryComponent, UserlistComponent, PriceupdaterComponent, PagenotfoundComponent, RegistrationComponent
  ],
  imports: [//list of all component required by
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
