
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  productsarr:any[]=[]
  cart:any[]=[]
  cartProducts:any[]=[]
  cartobj={
    "cartId": 0,
    "custId": 3,
    "productId": 0,
    "quantity": 0,
    "addedDate": "2023-05-12T11:29:01.656Z"
  }
constructor(private productsrv:ProductService){
  this.productsrv.cardaddedSubject.subscribe(res=>{
this.loaddcart()
  })
}

ngOnInit(): void {
  this.loadallproducts();
  this.loaddcart()
}

loadallproducts(){
this.productsrv.getallproducts().subscribe((result:any)=>{
this.productsarr=result.data

})
}

loaddcart(){
  this.productsrv.getCartItemsByCustId(3).subscribe((result:any)=>{
this.cartProducts=result.data;

  })
}

addtocarts(productsId:number)
{

  this.cartobj.productId=productsId
  this.productsrv.addtocart(this.cartobj).subscribe((result:any)=>{
    if(result.result){
      alert('product added to cart');
      this.productsrv.cardaddedSubject.next(true)
    }
  })
}
}
