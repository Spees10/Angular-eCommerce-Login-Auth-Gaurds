import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Icart } from 'src/app/ViewModels/icart';
import { FormsModule } from '@angular/forms';
import { StaticProductsService } from 'src/app/Services/StaticProducts.service';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // providers: [StaticProductsService]
})
export class ProductComponent implements OnInit, OnChanges {
  OrderTotalPriceProd: number = 0;
  //ProductList: IProduct[] = [];
  ProductList2: IProduct[] = [];
  cartList: Icart[] = [];
  @Output() sentIcart: EventEmitter<Icart[]>;
  @Input() SentCatID: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  dato: Date;
  nationalID: string = '2970718083100136';

  constructor(//private SPS: StaticProductsService,
    private router: Router,
    private prdService: ProductsService) {
    this.totalPriceChanged = new EventEmitter<number>();
    this.sentIcart = new EventEmitter<Icart[]>();
    this.dato = new Date();
  }

  ngOnChanges(): void {
    //this.filterCats()
    //this.ProductList2 = this.SPS.getProductByCatID(this.SentCatID);

    this.prdService.getProductsByCatID(this.SentCatID).subscribe(
      prds => { this.ProductList2 = prds }
    );
  }

  ngOnInit(): void {
    this.prdService.getAllProducts().subscribe(prds => { this.ProductList2 = prds });
  }

  buyPrd(prdPrice: number, counto: any, item: IProduct) {
    this.OrderTotalPriceProd += +counto * prdPrice;
    this.totalPriceChanged.emit(this.OrderTotalPriceProd);

    this.cartList.push({
      ID: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
      count: counto,
    })
    this.sentIcart.emit(this.cartList);
  }

  openPrdDetails(prdID: number) {
    // this.router.navigateByUrl("/Product" + prdID)
    this.router.navigate(['/Product', prdID])
  }
}
