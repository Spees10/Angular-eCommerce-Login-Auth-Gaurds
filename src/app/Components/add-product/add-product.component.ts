import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private prdService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addPrd() {
    const prd: IProduct = {
      id: 12,
      name: "Lo2Lo2 Tablet",
      quantity: 10,
      price: 500,
      img: "https://www.picsum.photos/300/200",
      CategoryID: 101
    }

    // this.prdService.addProduct(prd).subscribe((prd) => {
    //   alert("product added successfully"); //! better using Toast or SnackBar or bs alert
    //   this.router.navigateByUrl('/Product');
    // });

    const observer = {
      next: (prd: IProduct) => {
        alert("product added successfully"); //! better using Toast or SnackBar or bs alert
        this.router.navigateByUrl('/Product');
      },
      error: (err: Error) => (console.log(err.message)),
    }
    this.prdService.addProduct(prd).subscribe(observer);
  }
}
