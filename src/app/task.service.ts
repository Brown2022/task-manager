import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }
  
  getList() {
    return this.webRequestService.get('lists')
  }

  createList(Title: string) {
    // we want to send a web request to create a list
   return this.webRequestService.post('lists', { Title });   
  }

  updateList(id: string, title: string) {
    //we want to send a web request to update a list
    return this.webRequestService.patch(`lists/${id}`, { Title });
  }

  updateTask(listId: string, taskId: string, title: string) {
    // we want to send a web request to update a list
    return this.webRequestService.patch(`lists/${listId}/tasks/${taskId}`, {Title});
  }

  deleteTask(listId: string, taskId: string) {
    return this.webRequestService.delete(`lists/${listId}/task/${taskId}`);
  }

  deleteList(id: string) {
    return this.webRequestService.delete(`lists/${id}`);
  }
  getTask(id: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    // we want to send a web request to create a task
    return this.webRequestService.post(`lists/${listId}/tasks`, {title})
  ;  }

  complete(task: Task){
    return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed: !task.completed
    });
  }
}

