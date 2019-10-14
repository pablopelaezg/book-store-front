import {Item} from './item.model';

export interface InventoryResponse {
  availableItems: Array<Item>;
  totalElements: number;
}
