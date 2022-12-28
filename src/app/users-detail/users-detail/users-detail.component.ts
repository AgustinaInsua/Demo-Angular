import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/model/mock-users';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  users= USERS;
  selectedUser!: User[];
  constructor() { }

  ngOnInit(): void {
  }

}
