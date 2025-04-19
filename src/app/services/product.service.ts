import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService {
  getProducts():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`);
  }
  getProduct(id:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }
}
