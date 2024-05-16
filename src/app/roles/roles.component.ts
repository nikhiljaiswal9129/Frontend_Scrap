import { Component } from '@angular/core';
import { list, roleList } from './list';
import { appService } from '../service/app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  links = ['Admins', 'Customers', 'Roles', 'Add New Role'];
  activeLink = this.links[0];
  user: list[] = [];
  admins: list[] = []
  Customers: list[] = []
  roles: roleList[] = []

  constructor(private appService: appService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe(
      (data) => {
        this.user = data;
        console.log('data--', data);

        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          console.log('admin --> ', element.isAdmin);
          if(element.isAdmin){
            this.admins.push(element);
          }
          else if(!element.isAdmin){
            this.Customers.push(element);
          }
          
          
        }
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );

    this.appService.getAllRoles().subscribe((res) => {
      console.log('roles-->', res);
      this.roles = res;
    })
    
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form submitted with data:", form.value);
      const userData = {
        role: form.value.roleName
      };
      this.appService.createRole(userData).subscribe(
        (res: any) => {
          form.resetForm();
        },
        (error: any) => {
          console.error("Error logging in:", error);
          // Handle error here (display error message to user, etc.)
        }
      );
    }
    
  }

}
