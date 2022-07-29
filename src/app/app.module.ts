import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { AddressComponent } from './address/address.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { TermsComponent } from './terms/terms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EditAddressComponent,
    AddressComponent,
    ProfileDetailsComponent,
    ForgotPasswordComponent,
    SignupComponent,
    LoginComponent,
    OrdersComponent,
    DashboardComponent,
    ShopComponent,
    CheckoutComponent,
    CartComponent,
    ProductsingleComponent,
    MenComponent,
    WomenComponent,
    TermsComponent,
    AboutusComponent,
    ContactComponent,
    PrivacypolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
