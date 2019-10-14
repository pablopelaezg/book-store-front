import { Component, OnInit, Input } from '@angular/core';
import {Item} from "../../../model/item.model";
import {InvoiceItem} from "../../../model/invoiceitem.model";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  private item: Item;

  private qtyToAdd: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addUnitsToItem(this.item, this.qtyToAdd);
    this.qtyToAdd = 1;
  }

}
