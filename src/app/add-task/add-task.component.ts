import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  addTask(task:any){
task=new MyserviceService().addTask(task);
  }
}
