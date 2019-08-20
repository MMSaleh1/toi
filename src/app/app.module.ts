import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { Diagnostic } from "@ionic-native/diagnostic";
import { Geolocation } from "@ionic-native/geolocation";
import { OpenNativeSettings } from "@ionic-native/open-native-settings";
import { CallNumber } from '@ionic-native/call-number';



import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AppointmentPage } from '../pages/appointment/appointment';
import { BlogPage } from '../pages/blog/blog';
import { BlogdetailPage } from '../pages/blogdetail/blogdetail';
import { MyappointmentPage } from '../pages/myappointment/myappointment';
import { PasswordPage } from '../pages/password/password';
import { ServicesPage } from '../pages/services/services';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TestimonialsPage } from '../pages/testimonials/testimonials';
import { OneSignal } from '@ionic-native/onesignal';

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
import { UpdateProfilePageModule } from '../pages/update-profile/update-profile.module';
import { LandingPageModule } from '../pages/landing/landing.module';
import { TermsPageModule } from '../pages/terms/terms.module';
import { NotificationsProvider } from '../providers/notifications/notifications';
import { HelperToolsProvider } from '../providers/helper-tools/helper-tools';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AppointmentPage,
    BlogPage,
    BlogdetailPage,
    MyappointmentPage,
    PasswordPage,
    ServicesPage,
    SigninPage,
    SignupPage,
    TestimonialsPage,

  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
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
    UpdateProfilePageModule,
    LandingPageModule,
    TermsPageModule,

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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RootProvider,
    ItemsApiProvider,
    UserProvider,
    OneSignal,
    AutoCompleteProvider,
    Database,
    CartProvider,
    OpenNativeSettings,
    Diagnostic,
    Geolocation,
    CallNumber,
    NotificationsProvider,
    HelperToolsProvider

  ]
})
export class AppModule { }
