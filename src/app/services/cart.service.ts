import {Injectable} from "@angular/core";
import {Item} from "../model/item.model";

@Injectable()
export class CartService {

  private cart: Map<string, Item>;

  constructor() {
    this.cart = new Map<string, Item>();
  }

  getCartItems() {
    return Array.from(this.cart.values());
  }

  addUnitsToItem(item: Item, units: number) {

    if(this.cart.has(item.id)) {
      let entry: Item = this.cart.get(item.id);
      entry.units = entry.units + units;
    } else {
      let entry: Item = Object.assign({}, item);
      entry.units = 1;
      this.cart.set(item.id, item);
    }
  }

  reduceUnitToItem(item: Item) {
    if(this.cart.has(item.id) && this.cart.get(item.id).units > 0) {
      let entry: Item = this.cart.get(item.id);
      entry.units = entry.units + 1;
    }
  }

  removeItemFromCart(item: Item) {
    if(this.cart.has(item.id)) {
      this.cart.delete(item.id);
    }
  }

  submitInvoice() {

  }

}
