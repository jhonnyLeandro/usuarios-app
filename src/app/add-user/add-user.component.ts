import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }
  @Output() messageEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(false);
  }

}
