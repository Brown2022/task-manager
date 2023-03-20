import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  selectedListId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(){
    this.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.selectedListId = params.listId;
          this.taskService.getTask(params.listId).subscribe((tasks: Task[]) => {
            this.tasks = tasks;
          } ) 
        } else {
          this.tasks = undefined;
        }
      }
    )
  }
  createNewList(title: string){
    // we want to send a web request to create a list
    this.webRequestService.post('/list', { title });

  
  }
}
