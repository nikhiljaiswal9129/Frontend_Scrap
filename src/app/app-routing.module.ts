import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { RatesComponent } from './rates/rates.component';
import { HeroComponent } from './hero/hero.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RolesComponent } from './roles/roles.component';
import { OrderManagementComponent } from './order-management/order-management.component';


const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rates',
    component: RatesComponent
  },
  {
    path: 'register',
    component: FormComponent
  },
  {
    path: 'bookings',
    component: BookingListComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'admin/register-admin',
    component: RegisterAdminComponent
  },
  {
    path: 'admin/users-detail',
    component: UserDetailsComponent
  },
  {
    path: 'admin/roles',
    component: RolesComponent
  },
  {
    path: 'admin/order-details',
    component: OrderManagementComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
