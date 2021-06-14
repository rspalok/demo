import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subject=new Subject<string>();
  setUserName(username:string){//invoke by login componement
    // add the new value to the subject ..... add to the stream 
    this.subject.next(username);// adde to subject 
  }
  getUserName():Observable<string>{ // instsnce of user name // invoced by header component
    return this.subject.asObservable();
  }
  

  constructor() { }
}
