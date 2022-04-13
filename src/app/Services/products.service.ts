import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  getProductsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products?CategoryID=${catID}`);
  }

  getProductByID(prdID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.APIURL}/products/${prdID}`);
  }

  addProduct(newPrd: IProduct) {
    return this.httpClient.post(`${environment.APIURL}/products`, JSON.stringify(newPrd));
  }

  updateProduct(prdID: number, UpdatePrd: IProduct) {
    return this.httpClient.put(`${environment.APIURL}/products/${prdID}`, JSON.stringify(UpdatePrd));
  }

  deleteProduct(prdID: number) {
    return this.httpClient.delete(`${environment.APIURL}/products/${prdID}`);
  }
}
