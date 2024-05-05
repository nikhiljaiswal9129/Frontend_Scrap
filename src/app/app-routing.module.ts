import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { RatesComponent } from './rates/rates.component';
import { HeroComponent } from './hero/hero.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HomeComponent } from './home/home.component';


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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
