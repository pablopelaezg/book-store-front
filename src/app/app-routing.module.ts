import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemlistComponent} from "./dashboard/itemlist/itemlist.component";
import {CartComponent} from "./dashboard/cart/cart.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemlistComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
