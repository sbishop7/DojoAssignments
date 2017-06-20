import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommunicateService } from './../../communicate.service';
import { Router } from '@angular/router';
import { Product } from './../product';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnDestroy {
  subscription: Subscription;
  products: Array<Product> = []

  constructor(private _communicateService: CommunicateService, private _router: Router) {
    this.subscription = this._communicateService.subject.subscribe((products) => {
      this.products = products;
    }, (err) => {}, () => {});
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickEdit(idx) {
    this._router.navigate( ['/edit', 'idx'] );
  }

  onClickDelete(idx){
    console.log("Flesh out Delete function... " + idx)
    // const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._communicateService.updateProducts(this.products);

  }
}
