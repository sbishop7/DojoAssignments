import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './products/home/home.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'list', component: ListProductsComponent},
  { path: 'create', component: NewProductComponent},
  { path: 'edit/:idx', component: EditProductComponent},
  // { path: 'edit', component: EditProductComponent},
  // { path: 'list/edit', component: EditProductComponent},

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
