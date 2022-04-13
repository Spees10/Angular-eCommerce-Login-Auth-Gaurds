import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ProductComponent } from './Components/Order/product/product.component';
import { CartComponent } from './Components/Order/Cart/Cart.component';
import { FormsModule } from '@angular/forms';
import { RoundedShadowDirective } from './Components/Custom/RoundedShadow.directive';
import { NationalIDPipe } from './Components/Custom/NationalID.pipe';
import { StaticProductsService } from './Services/StaticProducts.service';
import { UserLoginComponent } from './Components/UserLogin/UserLogin.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { LayoutComponent } from './Components/Layout/Layout.component';
import { ProductDetailsComponent } from './Components/Order/ProductDetails/ProductDetails.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductComponent,
    CartComponent,
    RoundedShadowDirective,
    NationalIDPipe,
    UserLoginComponent,
    NotFoundComponent,
    LayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    // StaticProductsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
