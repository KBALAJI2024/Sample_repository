import { Component,OnInit,OnDestroy } from '@angular/core';


@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  

  todos: { id: number; task: string; isEditing: boolean; time: Date }[] = [];
  newTask: string = '';
  editTask: string = '';
  time: Date = new Date();
  interval: any;

parentMessage: string = 'Developer  Balaji';




ngOnInit(): void {
  
}

tableData = [
  { id: 1, name: 'John Doe', age: 28, department: 'HR' },
  { id: 2, name: 'Jane Smith', age: 32, department: 'IT' },
  { id: 3, name: 'Michael Brown', age: 40, department: 'Finance' }
];
 



  addTask() {
    if (this.newTask.trim()) {
      this.todos.push({
        id: this.todos.length + 1,
        task: this.newTask,
        isEditing: false,
        time: new Date()
      });
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  startEditing(todo: any) {
    todo.isEditing = true;
    this.editTask = todo.task;
  }

  saveTask(todo: any) {
    if (this.editTask.trim()) {
      todo.task = this.editTask;
      todo.isEditing = false;
    }
  }

  cancelEditing(todo: any) {
    todo.isEditing = false;
  }
  }



