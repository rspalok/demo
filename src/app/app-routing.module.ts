import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { TodoreportComponent } from './todo/todoreport/todoreport.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'inventory',
    component:InventoryComponent
  },
  {
    path:'products',
    component:ProductlistComponent
  },
  {
    path:'todo',
    component:TodolistComponent
  },
  {
    path:'reporttodo',
    component:TodoreportComponent
  },
  {
    path:'users',
    component:UserlistComponent
  },
  {
    path:'reg',
    component:RegistrationComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
