import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { appService } from '../service/app.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrl: './register-admin.component.scss'
})

export class RegisterAdminComponent {
  constructor(private router: Router, private appService: appService) { }

  signUpSubmit(form: any) {
    this.appService.createAdmin(form.value)
      .subscribe(
        (response) => {
          swal('Hoorrey!!!', 'Congrats, User has been Registered as Admin Successfully', "success");
          console.log('user data', form.value);
          this.router.navigate(['/admin']);
        },
        (error) => {
          console.error(error);
          swal('Oops...', 'Something went wrong. Please try again later.', "warning");
        }
      );
  }
  
}
