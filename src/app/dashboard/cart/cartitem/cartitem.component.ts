import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../model/item.model";

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  @Input()
  private cartItem: Item;

  constructor() { }

  ngOnInit() {
  }

}
