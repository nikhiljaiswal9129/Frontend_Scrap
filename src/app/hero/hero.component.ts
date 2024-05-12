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
  // signUpForm: boolean = true;
  // logInForm: boolean = false;
  otp: any;
  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form submitted with data:", form.value);
      this.router.navigate(['/home']);
    }
  }

}
