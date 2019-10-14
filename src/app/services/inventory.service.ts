import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {InventoryResponse} from "../model/inventoryresponse.model";
import {Observable} from "rxjs";

@Injectable()
export class InventoryService {

    constructor(private http: HttpClient) {}

    getInventoryItems(page: Number, pageSize: Number): Observable<InventoryResponse> {
      let params = new HttpParams().set('page', page.toString()).set('pageSize', pageSize.toString());
      return this.http.get<InventoryResponse>(environment.baseUrl + environment.uris.inventory, {
        params: params
      })
    }

}
