import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users = Array<any>();// refer user calass
  constructor(private userService:UserService) { 
    //make an Http request
    //make it in service 
  }

  ngOnInit(): void {//life cycle hook
    // make http a call here
    this.userService.getUsers().subscribe(userData=>{this.users=userData});
  }
  addUser(){
  }

}
