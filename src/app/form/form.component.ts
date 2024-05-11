import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  time = ['9AM-12PM', '1PM-4PM', '5PM-8PM'];
  weight = ['Less than 20kgs', '20kgs-50kgs', '50kgs-100kgs', '100kgs-500kgs', 'Above 500kgs'];

  user = {
    // _id: '',
    weight: '',
    firstname: '',
    lastname: '',
    date: '',
    remarks: '',
    phoneno: 0,
    email: '',
    time: '',
    address: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onSubmit(formData: any){
    swal("Hoorrey!!!", "Congrats, Your booking has been scheduled", "success");
    console.log(formData, this.user);
    const baseURL = 'http://localhost:8800/';


    this.http.post(baseURL, this.user).subscribe((res: any) => {
      console.log("data added successfully", res);
      formData.resetForm();
      this.router.navigate(['/bookings']);
    })
  }

}
