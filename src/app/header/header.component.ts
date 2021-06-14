import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string="";
  constructor(private service:AuthService) { 
    //this.username=service.getUserName();
    this.service.getUserName().subscribe(newnewUseName=>{//=> spite arrow property of ts (writing function)
      this.username = newnewUseName;
      // this code exicute every time when ever user change
    });
  }

  ngOnInit(): void {
  }

}
