import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/UserService'
import { UpdateUsersService } from '../update-users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  updateUsersEvent:Subscription;

  users = [];

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private updateUsers: UpdateUsersService
    ) {
      this.updateUsersEvent = this.updateUsers.getEvent().subscribe(()=> {
        this.ngOnInit();
      })
    }

  ngOnInit(){
    this.getUsers();
  }

  sendMessage() {
    this.messageEvent.emit(true);
  }

  getUsers(){
    this.userService.get().subscribe((data: any[])=>{
      this.users = data;
    })
  }

}
