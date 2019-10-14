import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CartConfirmComponent>,
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
