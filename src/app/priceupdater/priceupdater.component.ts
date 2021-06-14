import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 

@Component({
  selector: 'app-priceupdater',
  templateUrl: './priceupdater.component.html',
  styleUrls: ['./priceupdater.component.css']
})
export class PriceupdaterComponent implements OnInit {

  @Input()
  price:number=0;//@Input ----> Value will be set by Parent  

  @Output()
  update =new EventEmitter<number>();

  constructor() {

  }

  ngOnInit(): void {
  }

  updatePrice(){
    this.update.emit(this.price);//trigger the emit event and update the value
    console.log("====update===="+this.price);
  }
}
