import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [];
  product = {
    title: "",
    price: 0,
    image: ""
  }

  constructor() {
    this.products = [
      {title: "DSLR Camera",
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
      image: "./../assets/keyboard.jpg"},
    ]
   }
    

  ngOnInit() {
  }

}
