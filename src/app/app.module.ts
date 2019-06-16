import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AppointmentPage } from '../pages/appointment/appointment';
import { BlogPage } from '../pages/blog/blog';
import { BlogdetailPage } from '../pages/blogdetail/blogdetail';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MyappointmentPage } from '../pages/myappointment/myappointment';
import { PasswordPage } from '../pages/password/password';
import { ProfilePage } from '../pages/profile/profile';
import { ServicesPage } from '../pages/services/services';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TestimonialsPage } from '../pages/testimonials/testimonials';
import { RootProvider } from '../providers/root/root';
import { ItemsApiProvider } from '../providers/items-api/items-api';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AppointmentPage,
    BlogPage,
    BlogdetailPage,
    ContactPage,
    HomePage,
    MyappointmentPage,
    PasswordPage,
    ProfilePage,
    ServicesPage,
    SigninPage,
    SignupPage,
    TestimonialsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    HomePage,
    MyappointmentPage,
    PasswordPage,
    ProfilePage,
    ServicesPage,
    SigninPage,
    SignupPage,
    TestimonialsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RootProvider,
    ItemsApiProvider,
    UserProvider
  ]
})
export class AppModule {}
