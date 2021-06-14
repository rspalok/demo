import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string="admin";
  password : string="admin";
  constructor(private service:AuthService,private rootto:Router) {
    //private able to acces its instance
    // wthout access specifier use here only
   }
  

  ngOnInit(): void {
  }

  login(){
    console.log("login  "+this.username);
    // code to authenticate
    this.service.setUserName(this.username);
    //root to /product
    this.rootto.navigateByUrl('/products')
  }

}
