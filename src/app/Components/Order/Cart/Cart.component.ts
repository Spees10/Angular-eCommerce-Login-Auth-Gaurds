import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Icart } from 'src/app/ViewModels/icart';
import { ICategory } from 'src/app/ViewModels/icategory';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild(ProductComponent) productListComponent!: ProductComponent;
  Cat: ICategory[] = [];
  cartList: Icart[] = [];
  SelectedCatID: number = 0;
  RecievedOrderTotalPrice: number = 0;

  constructor() {
    this.Cat.push(
      { ID: 100, name: 'Electronics' },
      { ID: 101, name: 'Clothes' },
      { ID: 102, name: 'Sports' }
    );
  }

  ngOnInit() {
  }
  buy() {

  }

  onTotalPriceChanged(totalPrice: number) {
    this.RecievedOrderTotalPrice = totalPrice;
  }
  onSentICart(cartListy: Icart[]) {
    this.cartList = cartListy;
  }

  deleto(ic: Icart, indi: number) {
    let prdListo = this.productListComponent.ProductList2;
    this.cartList.splice(indi);
    for (let i = 1; i < prdListo.length; i++) {
      if (prdListo[i].id == ic.ID) {
        prdListo[i].quantity += +(ic.count);
      }
    }
  }
}
