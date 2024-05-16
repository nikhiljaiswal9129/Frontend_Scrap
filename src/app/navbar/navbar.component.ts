import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appService } from '../service/app.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isAdmin: boolean = false;
  constructor(private router: Router, private appService: appService) {
    

  }

  ngOnInit(): void {    
    this.appService.userLoggedIn.subscribe(res => {
      console.log(res);
      this.isAdmin = res;
    });
  }

  home(){
    // if()
      this.router.navigate(['/home'])
  }

}
