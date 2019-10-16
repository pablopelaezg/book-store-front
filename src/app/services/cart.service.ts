import {Injectable} from "@angular/core";
import {Item} from "../model/item.model";
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {InvoiceItem} from "../model/invoiceitem.model";

@Injectable()
export class CartService {

  private cart: Map<string, Item>;

  totalCart = new BehaviorSubject<Number>(0);
  totalCart$ = this.totalCart.asObservable();

  constructor(private http: HttpClient) {
    this.cart = new Map<string, Item>();
  }

  getCartItems() {
    return Array.from(this.cart.values());
  }

  hasItemsInCart() {
    return this.cart.size > 0;
  }

  addUnitsToItem(item: Item, units: number) {

    if(this.cart.has(item.id)) {
      let entry: Item = this.cart.get(item.id);
      entry.units = entry.units + units;
    } else {
      let entry: Item = Object.assign({}, item);
      entry.units = units;
      this.cart.set(item.id, entry);
    }

    this.updateTotalCart();

  }

  reduceUnitToItem(item: Item) {
    if(this.cart.has(item.id) && this.cart.get(item.id).units > 0) {
      let entry: Item = this.cart.get(item.id);
      entry.units = entry.units + 1;
    }
    this.updateTotalCart();
  }

  removeItemFromCart(item: Item) {
    if(this.cart.has(item.id)) {
      this.cart.delete(item.id);
    }

    this.updateTotalCart();

  }

  updateTotalCart() {
    this.totalCart.next(Array.from(this.cart.values()).reduce((t, {units, price}) => t + units*price, 0));
  }

  clearCart() {
    this.cart.clear();
    this.updateTotalCart();
  }

  submitInvoice() {

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      .set('Access-Control-Allow-Origin', '*');
      this.http.post(environment.baseStoreUrl + environment.storeUris.invoice, {
        itemsToBuy: Array.from(this.cart.values()).map<InvoiceItem>(item => {
          return {
            itemId: item.id,
            units: item.units
          }
        })
      }, {headers: headers}).subscribe(result => {
        this.clearCart();
      })
  }

}
