import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appService } from '../service/app.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  isAdmin: boolean = false;

  constructor(    
    private http: HttpClient,
    private router: Router,
    private appService: appService
  ) { }

  // mobileNo: any;
  // signUpForm: boolean = true;
  // logInForm: boolean = false;
  // otp: any;
  // onSubmit(form: any) {
  //   if (form.valid) {
  //     console.log("Form submitted with data:", form.value);
  //     this.router.navigate(['/home']);


  //     const baseURL = 'http://localhost:8800/';

      
  //     this.appService.logIn(form.value).subscribe((res: any) => {
  //       console.log("User Logged In successfully", res);
  //       form.resetForm();
  //       this.router.navigate(['/home']);
  //     });
  //   }
  // }

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form submitted with data:", form.value);
      const userData = {
        email: form.value.email,
        password: form.value.password
      };
      this.appService.logIn(userData).subscribe(
        (res: any) => {
          console.log("User Logged In successfully", res);
          this.appService.isLoggedIn$.next(true);
          this.isAdmin = res.data.isAdmin;
          console.log("isAdmin-->",this.isAdmin);

          localStorage.setItem("user_id", res.data._id);
          
          form.resetForm();
          if(this.isAdmin){
            this.router.navigate(['/admin']);
            this.appService.isAdmin$.next(true);
            // this.appService.setUserLoggedIn(true);
          }else{
            this.router.navigate(['/home']);
            this.appService.isAdmin$.next(false);
          }
        },
        (error: any) => {
          console.error("Error logging in:", error);
          // Handle error here (display error message to user, etc.)
        }
      );
    }
  }
  // fix the situation when user try to enter with wrong data---------->>>>>>>>>>>>

}
