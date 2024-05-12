import { Component } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(private router: Router) { }

  signUpSubmit(form: any){
    swal("Hoorrey!!!", "Congrats, Your Account has been Created Successfully", "success");
    console.log('user data', form.value);
    this.router.navigate([''])
  }
}
