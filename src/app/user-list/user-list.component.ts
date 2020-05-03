import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/UserService'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.get().subscribe((data: any[])=>{
      this.users = data;
      console.log (this.users);
    })  
  }

  sendMessage() {
    this.messageEvent.emit(true);
  }

}
