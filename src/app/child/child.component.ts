import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{
  @Input() receivedMessage ?:string;
 
constructor(public localstorage:ServiceService){}

  inputvalue:string='';
 addtasks:string[]=[];
 time:any=new Date();
 key:string='TASK';
ngOnInit(): void {
  console.log('date',this.time)
}
@Input() receiveddata: any[]=[];

addvalue(){
  this.addtasks.push(this.inputvalue);
  this.inputvalue='';
  this.localstorage.setItem('Task',JSON.stringify(this.addtasks));
}

deleteTask(index:number){
  const remove = this.addtasks[index];
this.localstorage.removeItem(remove);
 const storage = this.addtasks.splice(index,1);
}

message:string='sucessfull';

}

