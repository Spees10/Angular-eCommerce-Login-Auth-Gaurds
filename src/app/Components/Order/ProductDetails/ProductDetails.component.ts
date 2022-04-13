import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductsService } from 'src/app/Services/StaticProducts.service';
import { IProduct } from 'src/app/ViewModels/iproduct';


@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currPrdID: number = 0;
  prdi: IProduct | null = null;
  prdIdArr: number[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private staticPrdService: StaticProductsService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    //this.currPrdID = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    //this.prdi = this.staticPrdService.getProductByID(this.currPrdID);

    this.prdIdArr = this.staticPrdService.getPrds();
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currPrdID = Number(paramMap.get('pid'));
      this.prdi = this.staticPrdService.getProductByID(this.currPrdID);
    });
  }

  goBack() {
    this.location.back();
  }
  prevPrd() {
    let currInd = this.prdIdArr.findIndex((elem) => elem == this.currPrdID)
    // alert(currInd)
    let prevPrdID
    if (currInd > 0) {
      prevPrdID = this.prdIdArr[currInd - 1]
      this.router.navigate(['/Product', prevPrdID]);
    }
    else
      alert("no more")
  }
  nxtPrd() {
    let currInd = this.prdIdArr.findIndex((elem) => elem == this.currPrdID)
    // alert(currInd)
    let prevPrdID
    if (currInd <= this.prdIdArr.length) {
      prevPrdID = this.prdIdArr[currInd + 1]
      this.router.navigate(['/Product', prevPrdID]);
    }
    else
      alert("no more");
  }
}
