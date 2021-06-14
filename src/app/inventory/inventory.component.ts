import { Component, OnInit } from '@angular/core';
import { Product } from '../productlist/product';
import { ProductsdataService } from '../service/productsdata.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  productList:Array<Product>=[];
  constructor(dataService:ProductsdataService) { 
    this.productList=dataService.getProductList();
  }

  ngOnInit(): void {
  }

  delete(index:number){
    this.productList.splice(index,1);
  }
  setNewPrice(newPrice:number,index:number){

    this.productList[index].price=newPrice;
  }
}
