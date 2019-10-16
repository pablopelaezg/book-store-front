import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemlistComponent} from "./dashboard/itemlist/itemlist.component";
import {CartComponent} from "./dashboard/cart/cart.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemlistComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
