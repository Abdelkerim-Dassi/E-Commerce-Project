import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsingleComponent } from './productsingle/productsingle.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { TermsComponent } from './terms/terms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productsingle', component: ProductsingleComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'profiledetails', component: ProfileDetailsComponent },
  { path: 'address', component: AddressComponent },
  { path: 'edit-address', component: EditAddressComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
