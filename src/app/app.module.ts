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
import {MatDialogModule} from '@angular/material/dialog';
import { CartDeleteComponent } from './dashboard/cart/cart-delete/cart-delete.component';
import { RegisterComponent } from './register/register.component'
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemComponent,
    ItemlistComponent,
    CartComponent,
    LoginComponent,
    CartConfirmComponent,
    CartDeleteComponent,
    RegisterComponent
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
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    InventoryService,
    CartService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CartConfirmComponent, CartDeleteComponent]
})
export class AppModule { }
