import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { appService } from '../service/app.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(private router: Router, private appService: appService) { }

  // signUpSubmit(form: any){
  //   swal("Hoorrey!!!", "Congrats, Your Account has been Created Successfully", "success");
  //   console.log('user data', form.value);
  //   this.router.navigate([''])
  // }

  // signUpSubmit(form: any) {
  //   if (form.valid) {
  //     const userData = {
  //       firstName: form.value.firstName,
  //       lastName: form.value.lastName,
  //       email: form.value.email,
  //       password: form.value.password
  //     };
  //     this.appService.createUser(userData).subscribe(
  //       (res: any) => {
  //         console.log("User Registered Successfully", res);
  //         swal("Hoorrey!!!", "Congrats, Your Account has been Created Successfully", "success");
  //         form.resetForm();   //fix the method to handle this. this all three lines are not executing.
  //         this.router.navigate(['']);
  //       },
  //       (error: any) => {
  //         console.error("Error registering user:", error);
  //         // Handle error here (display error message to user, etc.)
  //       }
  //     );
  //   }
  // }

  signUpSubmit(form: any) {
    this.appService.createUser(form.value)
      .subscribe(
        (response) => {
          swal('Hoorrey!!!', 'Congrats, Your Account has been Created Successfully', "success");
          console.log('user data', form.value);
          this.router.navigate(['']);
        },
        (error) => {
          console.error(error);
          swal('Oops...', 'Something went wrong. Please try again later.', "warning");
        }
      );
  }
  
}
