import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,Authorization: 'my-auth-token'
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  getProductsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products?CategoryID=${catID}`);
  }

  getProductByID(prdID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.APIURL}/products/${prdID}`);
  }

  addProduct(newPrd: IProduct): Observable<IProduct> {
    //return this.httpClient.post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOptions);
    // return this.httpClient.post<IProduct>(
    //   `${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOptions
    // ).pipe(
    //   retry(3),
    //   catchError((err) => {
    //     alert(err);
    //     return throwError(() => new Error('Post Error'))
    //   })
    // );

    return this.httpClient.post<IProduct>(
      `${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOptions
    ).pipe(
      retry(3),
      catchError(this.handleError)
    );

  }

  updateProduct(prdID: number, UpdatePrd: IProduct) {
    return this.httpClient.put(`${environment.APIURL}/products/${prdID}`, JSON.stringify(UpdatePrd));
  }

  deleteProduct(prdID: number) {
    return this.httpClient.delete(`${environment.APIURL}/products/${prdID}`);
  }
}
