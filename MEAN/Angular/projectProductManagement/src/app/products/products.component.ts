import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './../communicate.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [{title: "DSLR Camera",
      price: 1499.99,
      image: "./../assets/camera.jpg"},
      {title: "Laptop",
      price: 0,
      image: "./../assets/laptop.bmp"},
      {title: "4K Monitor",
      price: 600,
      image: "./../assets/monitor.jpg"},
      {title: "Keyboard",
      price: 69.99,
      image: "./../assets/keyboard.jpg"}];
  product = {
    title: "",
    price: 0,
    image: ""
  }

  constructor(private _communicateService: CommunicateService) {
    this._communicateService.subject.next(this.products);
   }
    

  ngOnInit() {
  }

}
