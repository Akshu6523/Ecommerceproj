import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cardaddedSubject = new Subject<boolean>()

  constructor(private http:HttpClient) { }
  getallproducts():Observable<any[]>{
    return this.http.get<any[]>('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts');
  }

  addtocart(obj:any):Observable<any>{
    return this.http.post<any>('https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart',obj);
  }

  getCartItemsByCustId(custId:number):Observable<any[]>{
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=" + custId)
  }
}
