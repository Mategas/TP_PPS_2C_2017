import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { AlumnoPage } from '../pages/alumno/alumno';
import { MateriaPage } from '../pages/materia/materia';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { RegistroPage } from '../pages/registro/registro';
import { InicioPage } from '../pages/inicio/inicio';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AlumnoPage,
    MateriaPage,
    RegistroPage,
    InicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AlumnoPage,
    MateriaPage,
    RegistroPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider
  ]
})
export class AppModule {}
