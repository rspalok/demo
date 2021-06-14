import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service:UserService) { 

  }

  ngOnInit(): void {
  }

  ragister(userObj:any){
    this.service.addUser(userObj).subscribe(responcr=>{
      console.log(responcr);
      alert("form saved successfully ");
    });
  }

}
