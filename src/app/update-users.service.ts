import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdateUsersService {

  private subject = new Subject<any>();

  constructor() { }

  updateUsers() {
    this.subject.next();
  }
  
  getEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

}
