import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-delete',
  templateUrl: './cart-delete.component.html',
  styleUrls: ['./cart-delete.component.css']
})
export class CartDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CartDeleteComponent>,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onConfirm() {
    this.cartService.submitInvoice();
    this.onNoClick();
    this.router.navigate(['/items']);
  }

}
