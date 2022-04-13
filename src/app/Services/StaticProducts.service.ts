import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'any'
})
export class StaticProductsService {
  private prdList: IProduct[];
  constructor() {
    this.prdList = [
      { id: 22, name: 'IPhone', quantity: 0, price: 13000, img: 'https://picsum.photos/60/60', CategoryID: 100 },
      { id: 23, name: 'Sony', quantity: 15, price: 7000, img: 'https://picsum.photos/60/60', CategoryID: 100 },
      { id: 24, name: 'Samsung', quantity: 15, price: 4000, img: 'https://picsum.photos/60/60', CategoryID: 100 },
      { id: 33, name: 'T-Shirt', quantity: 1, price: 150, img: 'https://picsum.photos/60/60', CategoryID: 101 },
      { id: 34, name: 'Shirt', quantity: 0, price: 150, img: 'https://picsum.photos/60/60', CategoryID: 101 },
      { id: 35, name: 'Jeans', quantity: 110, price: 150, img: 'https://picsum.photos/60/60', CategoryID: 101 },
      { id: 44, name: 'Football', quantity: 2, price: 30, img: 'https://picsum.photos/60/60', CategoryID: 102 }
    ];
  }

  getAllProducts(): IProduct[] {
    return this.prdList;
  }

  getProductByCatID(cID: number): IProduct[] {
    if (cID == 0)
      return this.prdList;
    else
      return this.prdList.filter(prd => prd.CategoryID == cID);
  }

  getProductByID(pID: number): IProduct | null {
    let foundPrd = this.prdList.find(prd => prd.id == pID);
    return foundPrd ? foundPrd : null;
  }

  addNewPrd(prd: IProduct): void {
    this.prdList.push(prd);
  }

  getPrds(): number[] {
    let prdS = this.prdList.map(prd => prd.id)
    return prdS;
  }

}
