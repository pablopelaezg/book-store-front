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
import {MatTableModule} from '@angular/material/table';
import { CartConfirmComponent } from './dashboard/cart/cart-confirm/cart-confirm.component';
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemComponent,
    ItemlistComponent,
    CartComponent,
    LoginComponent,
    CartConfirmComponent
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
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
    InventoryService,
    CartService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CartConfirmComponent]
})
export class AppModule { }
