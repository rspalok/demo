import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //users = new Array<any>();
  
  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{//  http retun oservsblr 
    //return this.users;
    return this.http.get('https://jsonplaceholder.typicode.com/users');// it retun oservsblr 
  }
  getSingleUsers(Id:number):Observable<any>{//  http retun oservsblr 
    //return this.users;
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+Id);// it retun oservsblr 
  }
  addUser(userObj:any):Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/users',userObj);
  }
}
