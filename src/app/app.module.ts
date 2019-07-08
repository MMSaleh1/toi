import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AutoCompleteModule} from 'ionic2-auto-complete';


import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AppointmentPage } from '../pages/appointment/appointment';
import { BlogPage } from '../pages/blog/blog';
import { BlogdetailPage } from '../pages/blogdetail/blogdetail';
import { ContactPage } from '../pages/contact/contact';
import { MyappointmentPage } from '../pages/myappointment/myappointment';
import { PasswordPage } from '../pages/password/password';
import { ServicesPage } from '../pages/services/services';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TestimonialsPage } from '../pages/testimonials/testimonials';

import { RootProvider } from '../providers/root/root';
import { ItemsApiProvider } from '../providers/items-api/items-api';
import { UserProvider } from '../providers/user/user';
import { AutoCompleteProvider } from './../providers/auto-complete/auto-complete';

import { HomePageModule } from '../pages/home/home.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { ProfilePageModule } from './../pages/profile/profile.module';
import { CartPageModule } from '../pages/cart/cart.module';
import { NotificationsPageModule } from './../pages/notifications/notifications.module';
import { CategoriesPageModule } from './../pages/categories/categories.module';
import { ProductOffersPageModule } from './../pages/product-offers/product-offers.module';
import { CheckoutPageModule } from './../pages/checkout/checkout.module';
import { ThanksPageModule } from './../pages/thanks/thanks.module';
import { ContactUsPageModule } from './../pages/contact-us/contact-us.module';
import { HistoryPageModule } from '../pages/history/history.module';



import { Database } from '../providers/database/database';
import { CartProvider } from '../providers/cart/cart';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AppointmentPage,
    BlogPage,
    BlogdetailPage,
    ContactPage,
    MyappointmentPage,
    PasswordPage,
    ServicesPage,
    SigninPage,
    SignupPage,
    TestimonialsPage,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AutoCompleteModule,
    TabsPageModule,
    HomePageModule,
    ProfilePageModule,
    CartPageModule,
    NotificationsPageModule,
    CategoriesPageModule,
    ProductOffersPageModule,
    CartPageModule,
    CheckoutPageModule,
    ThanksPageModule,
    ContactUsPageModule,
    HistoryPageModule,

    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AppointmentPage,
    BlogPage,
    BlogdetailPage,
    ContactPage,
    MyappointmentPage,
    PasswordPage,
    ServicesPage,
    SigninPage,
    SignupPage,
    TestimonialsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RootProvider,
    ItemsApiProvider,
    UserProvider,
    AutoCompleteProvider,
    Database,
    CartProvider
  ]
})
export class AppModule {}
