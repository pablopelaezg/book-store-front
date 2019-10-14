import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Item} from "../../model/item.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private items: Array<Item>;

  constructor(private cartService: CartService) {
    this.items = new Array<Item>();
  }

  ngOnInit() {
    this.items = this.cartService.getCartItems();
  }

}
