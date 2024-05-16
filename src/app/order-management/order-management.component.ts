import { Component } from '@angular/core';
import { appService } from '../service/app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';
// import { list, roleList } from './list';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrl: './order-management.component.scss'
})

export class OrderManagementComponent {
  links = ['Active Orders', 'Completed Order'];
  activeLink = this.links[0];
  totalOrders: any[] = [];
  activeOrders: any[] = []
  completedOrders: any[] = []

  constructor(private appService: appService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.appService.getItems().subscribe(
      (data) => {
        this.totalOrders = data;
        console.log('data--', data);

        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if(element.isActive){
            this.activeOrders.push(element);
          }
          else if(!element.isAdmin){
            this.completedOrders.push(element);
          }
          
          
        }
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );

    
  }

  toogleStatus(data: any) {
    console.log("order detail", data);

    swal('Alert!!!', "Are Your Sure to mark this Order as Completed?",  "warning")
    .then((val) => {
      if(val) {
        swal('Alert!!!', 'This Order is marked as Completed', "warning");
        this.appService.updateItem(data._id, data).subscribe((res) => {
          console.log('result after update--', res);
          this.router.navigate(['admin']);
          // window.location.reload();
        });
      }
    })

  }

}
