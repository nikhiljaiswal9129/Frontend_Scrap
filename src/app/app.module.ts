import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RatesComponent } from './rates/rates.component';
import { FormComponent } from './form/form.component';
import { LandingComponent } from './landing/landing.component';
import { HeroComponent } from './hero/hero.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BookingListComponent } from './booking-list/booking-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RolesComponent } from './roles/roles.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RatesComponent,
    FormComponent,
    LandingComponent,
    HeroComponent,
    BookingListComponent,
    HomeComponent,
    SignUpComponent,
    AdminPageComponent,
    RegisterAdminComponent,
    UserDetailsComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
