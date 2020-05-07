import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/UserService';
import { User } from './user';
import { UpdateUsersService } from '../update-users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = new User (1,"","",new Date(),new Date());
  isEnabled = false;
  constructor(
      private userService: UserService,
      private updateUser: UpdateUsersService
    ) { }

  @Output() messageEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(false);
    this.postUser();
  }

  postUser(){
    this.userService.post(this.user).subscribe((data:any[])=> {
      console.log(data);
      this.updateUser.updateUsers();
    });
  }

  checkIfInputIsempty(event:any){
    if (this.user.firstName !== '' && this.user.lastName !== '') {
      this.isEnabled = true;
    }
  }

}
