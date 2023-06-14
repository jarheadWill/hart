import {Component, OnInit} from '@angular/core';
import {Product} from "@models/product.type";
import {InventoryService} from "@services/inventory.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  subscriptions: Subscription[] = [];
  interval: any;
  timeLeft: number = 10;
  inventory: Product[] = [];
  timerComplete = false;

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  constructor(private inventoryService: InventoryService) {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.getInventory()
        let timer = this.inventoryService.timerComplete().subscribe(result => this.timerComplete == result);
        this.subscriptions.push(timer);
        this.timeLeft = 10;
      }
    },1000)
  }

  getInventory() {
    let sub = this.inventoryService.getInventory().subscribe(result => this.inventory == result);
    this.subscriptions.push(sub);
  }
}
