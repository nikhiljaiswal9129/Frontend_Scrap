import { Component } from '@angular/core';
import { appService } from '../service/app.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
  activeOrders: any = 0;
  completedOrders: any = 0;
  totalAdmins: any = 0;
  totalUsers: any = 0;
  totalRoles: any = 0;
  totalSuperAdmins: any = 0;
  isAdmin: boolean = false;

  constructor (private appService: appService) { }

  ngOnInit(): void {
    //orders
    this.appService.getItems().subscribe((res) => {
      console.log('orders--', res);
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        if(element.isActive){
          this.activeOrders++;
        }
        else{
          this.completedOrders++;
        }
      }
    });
    //users
    this.appService.getAllUsers().subscribe((res) => {
      console.log('All Users--', res);
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        if(element.isAdmin){
          this.totalAdmins++;
        }
        else{
          this.totalUsers++;
        }
      }
    });
    //Roles
    this.appService.getAllRoles().subscribe((res) => {
      console.log('All Roles--', res);
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        this.totalRoles++;
      }
    });
  }

  
  logOut() {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/"; 
    swal("Logged Out Successfuly", "success")

  }

}
