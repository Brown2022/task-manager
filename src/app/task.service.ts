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
  
  }
}

