import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicateService } from './../../communicate.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product'



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products = [];
  product = {
    title: "",
    price: null,
    image_url: ""
  };


  constructor(private _communicateService: CommunicateService, private _router: Router) {
    this.subscription = this._communicateService.subject.subscribe((products) => {
      this.products = products;
    }, (err) => {}, () => {});
  }

  ngOnInit() {
  }

  onSubmit() {
    this.products.push(this.product);
    this._communicateService.updateProducts(this.products);
    this.product = {title: "", price: null, image_url: ""};
    this._router.navigate(['/list']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
