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

  showAlertFirstName = false;
  showAlertLastName = false;

  constructor(
      private userService: UserService,
      private updateUser: UpdateUsersService
    ) { }

  @Output() messageEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.user.firstName === '' || this.user.lastName === '') {
      this.showAlertFirstName =  this.user.firstName === '' ? true : false;
      this.showAlertLastName = this.user.lastName === '' ? true : false;
    } else {
      this.deleteForm();
      this.postUser();
    }
  }

  deleteForm(){
    this.messageEvent.emit(false);
  }

  postUser(){
    this.userService.post(this.user).subscribe((data:any[])=> {
      console.log(data);
      this.updateUser.updateUsers();
    });
  }

  checkFirstName(event:any){
    this.showAlertFirstName = false;
  }

  checkLastName(event:any){
    this.showAlertLastName = false;
  }

}
