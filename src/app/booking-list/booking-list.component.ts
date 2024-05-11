import { Component } from '@angular/core';
import { List } from './list';
import { appService } from '../service/app.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss'
})
export class BookingListComponent {
  list: List[] = [];
  panelOpenState = false;
  activeOrder: boolean = true;

  constructor(private appService: appService){}

  ngOnInit() {
    this.appService.getItems().subscribe((res) => {
      if(res){
        console.log('data----->', res);
        this.list = res;
      }
      else{
        console.log("error in fetching the data!!!");
      }
    })
  }

  toogleActive(){
    this.activeOrder = true;
  }
  toogleComplete(){
    this.activeOrder = false;
  }

  deleteOrder(orderId: string) {
    swal("Are you sure to Delete this Booking?")
    .then((val) => {
      if(val) {
        swal("Attention!!!", "Your Booking has been Deleted", "warning");
        console.log(orderId);
        this.appService.deleteItem(orderId).subscribe(
          (res) => {
            console.log("Delete response:", res);
            // Assuming _id is the correct property name for the ID
            this.list = this.list.filter((item) => item._id !== orderId);
          },
          (error) => {
            console.error("Delete error:", error);
          }
        );
      }
    })
  }
  



}

// list: List[] = [
//   {
//     id: "98976",
//     firstname: "nikhil",
//     lastname: "jasiwla", 
//     weight: "Above 500kgs", 
//     address: "bbsr", 
//     date: "11-04-2024", 
//     remarks: "string", 
//     phoneno: "912929132", 
//     email: "asda@gmail.com", 
//     time: "1PM-4PM"
//   },
//   {
//     id: "75688",
//     firstname: "dsafdsds",
//     lastname: "sdfdsf", 
//     weight: "Above 500kgs", 
//     address: "dudahi", 
//     date: "12-11-2022", 
//     remarks: "sdhkjsa jxhjaskdsa sdjca", 
//     phoneno: "912929132", 
//     email: "nikhil@gmail.com", 
//     time: "1PM-4PM"
//   }
// ];
