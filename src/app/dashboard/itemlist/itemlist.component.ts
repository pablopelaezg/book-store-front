import { Component, OnInit } from '@angular/core';
import {InventoryService} from "../../services/inventory.service";
import {Item} from "../../model/item.model";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  constructor(private inventoryService: InventoryService) { }

  private itemList: Array<Item>;
  private totalElements: number;
  private page: number = 1;
  private pageSize: number= 5;

  ngOnInit() {
    this.populateItems();
  }

  changePageEvent(pageEvent: PageEvent) {
    this.page = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.populateItems();
  }

  populateItems() {
    this.inventoryService.getInventoryItems(this.page + 1, this.pageSize).subscribe(response => {
      this.itemList = response.availableItems;
      this.totalElements = response.totalElements;
    });
  }



}
