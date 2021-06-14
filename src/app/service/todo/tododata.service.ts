import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/todo/todolist/todo';

@Injectable({
  providedIn: 'root'
})
export class TododataService {
  toDoList:Array<ToDo> = new Array<ToDo>();
  
  constructor() {  
    console.log("data invoked");
    let p1 = new ToDo(1, "Complete 'to do' project", false);
    let p2 = new ToDo(2, "Update to the server ", false);
    let p3 = new ToDo(3, "check the testing status ", false);
    let p4 = new ToDo(4, "go for uat", false);
    let p5 = new ToDo(5, "close the project", false);
    this.toDoList.push(p1);
    this.toDoList.push(p2);
    this.toDoList.push(p3);
    this.toDoList.push(p4);
    this.toDoList.push(p5);
  }
  getToDoList(){
    return this.toDoList;
  }
}
