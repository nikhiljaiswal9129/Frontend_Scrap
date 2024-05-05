import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(private router: Router) { }

  mobileNo: any;
  otpSent: boolean = false;
  isLoggedIn: boolean = false;
  otp: any;
  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form submitted with data:", form.value);
      this.otpSent = true;
    }
  }
  otpValidation(token: any){
    console.log('succesfully validated', token);
    this.isLoggedIn = true;
    this.router.navigate(['/home']);
  }

}
