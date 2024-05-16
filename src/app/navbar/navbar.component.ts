import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appService } from '../service/app.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  constructor(private router: Router, private appService: appService) {
    
    
  }
  ngOnInit(): void {    
    // this.appService.userLoggedIn.subscribe(res => {
    //   console.log(res);
    //   // this.isAdmin = res;
    // });
    this.appService.isLoggedIn$.subscribe(res => {
      // console.log(res);
      this.isLoggedIn =  res;
    });

    this.appService.isAdmin$.subscribe(res => {
      this.isAdmin = res;
    })
  }

  home(){
    // if()
      this.router.navigate(['/home'])
  }

  logOut() {
    localStorage.removeItem("user_id");
    this.appService.isLoggedIn$.next(false);
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/"; 
    swal("Logged Out Successfuly", "success")

  }
}
