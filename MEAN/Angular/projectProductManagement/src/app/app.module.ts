import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommunicateService } from './communicate.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './products/home/home.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListProductsComponent,
    ProductsComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
