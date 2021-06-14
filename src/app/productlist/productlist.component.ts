import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../service/productsdata.service';
import { Product } from './product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList:Array<Product> = [];
  isLogin:boolean=true;

  constructor(productService:ProductsdataService) {//hare dependency is inject in constructor 
    // provide instance for data service 
    this.productList=productService.getProductList();
   }

  ngOnInit(): void {
  }

  //controllers
  addToCart(product:Product){
    console.log(product.name);
  }
  delete(){

  }
}
