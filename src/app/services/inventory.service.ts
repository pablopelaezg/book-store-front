import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {InventoryResponse} from "../model/inventoryresponse.model";
import {Observable} from "rxjs";

@Injectable()
export class InventoryService {

    constructor(private http: HttpClient) {}

    getInventoryItems(page: Number, pageSize: Number): Observable<InventoryResponse> {

      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        .set('Access-Control-Allow-Origin', '*');
      const params = new HttpParams().set('page', page.toString()).set('pageSize', pageSize.toString());

      return this.http.get<InventoryResponse>(environment.baseStoreUrl + environment.storeUris.inventory, {
        params: params,
        headers : headers
      })
    }

}
