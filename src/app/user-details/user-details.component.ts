import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { list } from './userList';
import { appService } from '../service/app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  user: list[] = [];

  constructor(private appService: appService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  
  getAllStudent(){
    this.http.get("http://localhost:8800/allUser")
    .subscribe((res:any) => {
      console.log(res);
      this.user = res.data;
    })
  }

}