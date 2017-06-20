import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { CommunicateService } from './../../communicate.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products: Array<Product>;
  product: Product;

  constructor(
    private _route: ActivatedRoute, 
    private _communicateService: CommunicateService, 
    private _router: Router
  ) {

    this._communicateService.subject.subscribe((products) => {
      this.products = products;
    });

    this._route.params.subscribe((param)=>{
      console.log("TaskDetailsComponent loaded and url id given is: ", param.idx);
      this.product = this.products[param.idx]
    }) 
    
  }

  ngOnInit() {
  }
  onSubmit() {
    this._communicateService.updateProducts(this.products);
    this._router.navigate(['/list']);
  }
  

  onClickDelete(){
    const idx = this.products.indexOf(this.product);
    this.products.splice(idx, 1);
    this._communicateService.updateProducts(this.products);
  }

}
