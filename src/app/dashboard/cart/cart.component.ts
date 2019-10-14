import {Component, Inject, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Item} from "../../model/item.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CartConfirmComponent} from "./cart-confirm/cart-confirm.component";
import {CartDeleteComponent} from "./cart-delete/cart-delete.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private items: Array<Item>;
  displayedColumns: string[] = ['action', 'name', 'price', 'units', 'subtotal'];
  total: Number;

  constructor(private cartService: CartService, public dialog: MatDialog) {
    this.items = new Array<Item>();
    this.setTotal();
  }

  ngOnInit() {
    this.items = this.cartService.getCartItems();
  }

  deleteItemFromCart(item: Item) {
    this.cartService.removeItemFromCart(item);
    this.items = this.cartService.getCartItems();
  }

  setTotal() {
    this.cartService.totalCart$.subscribe(total => this.total = total);
  }

  openConfirmDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CartConfirmComponent, dialogConfig);
  }

  openDeleteDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CartDeleteComponent, dialogConfig);
  }

}
