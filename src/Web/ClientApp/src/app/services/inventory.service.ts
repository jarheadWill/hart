import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Product } from "../models/product.type";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(private api: ApiService) { }

  getInventory(): Observable<Product[]> {
    return this.api.get(`inventory`);
  }

  timerComplete(): Observable<boolean> {
    return this.api.post(`inventory`)
  }
}
