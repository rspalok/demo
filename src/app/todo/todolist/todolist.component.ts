import { Component, OnInit } from '@angular/core';
import { TododataService } from 'src/app/service/todo/tododata.service';
import { ToDo } from './todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  /*task:string;
  status:boolean;*/

  todoList:Array<ToDo> = [];

  isLogin:boolean=true;

  constructor(service:TododataService) {//hare dependency is inject in constructor 
    // provide instance for data service 
    this.todoList=service.getToDoList();
  /*  this.task=task;
    this.status=status;*/
   }
  
  ngOnInit(): void {
  }
 
   

  complite(todo:ToDo){
    console.log(todo.task); 
    let p5 = new ToDo(10, todo.task, false);
    this.todoList.push(p5);
    
    for (let i = 0; i < 3; i++) {
      console.log ("Block statement execution no." + i);
    }
  }
  newTodo(){
    console.log();
    let p5 = new ToDo(10, "task", false);
    this.todoList.push(p5);
  }
  
}
