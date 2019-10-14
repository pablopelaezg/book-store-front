import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ItemComponent} from './dashboard/itemlist/item/item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItemlistComponent } from './dashboard/itemlist/itemlist.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { LoginComponent } from './login/login.component';
import {CartService} from "./services/cart.service";
import {InventoryService} from "./services/inventory.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CartitemComponent } from './dashboard/cart/cartitem/cartitem.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemComponent,
    ItemlistComponent,
    CartComponent,
    LoginComponent,
    CartitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
    MatPaginatorModule
  ],
  providers: [
    InventoryService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
