import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeComponent } from './Components/Home/Home.component';
import { LayoutComponent } from './Components/Layout/Layout.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { CartComponent } from './Components/Order/Cart/Cart.component';
import { ProductComponent } from './Components/Order/product/product.component';
import { ProductDetailsComponent } from './Components/Order/ProductDetails/ProductDetails.component';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import { AuthGuard } from './Gaurds/auth.guard';

const routes: Routes = [ //first-match wins strategy
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' }, //default path
      { path: 'Home', component: HomeComponent },
      { path: 'Product', component: ProductComponent },
      { path: 'Product/:pid', component: ProductDetailsComponent },
      { path: 'Add-Product', component: AddProductComponent },
      { path: 'Order', component: CartComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'Login', component: UserLoginComponent },
  { path: 'Logout', component: UserLoginComponent },
  { path: '**', component: NotFoundComponent }//wild card path . . .
  //** means any thing any any thing, so being the last is important
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
