import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { AlumnoPage } from '../pages/alumno/alumno';
import { AngularFireAuth } from 'angularfire2/auth';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginProvider } from '../providers/login/login';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  user:any;

  constructor(public lgServ: LoginProvider, afAuth: AngularFireAuth, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    


      const authObserver = this.lgServ.afAuth.authState.subscribe( user => {
        this.user = user;
        if (user) {
        this.rootPage = InicioPage;
        } else {
        this.rootPage = LoginPage;
      }
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();  
      

    });
  }

  CerrarSesion()
  {
    //this.afAuth.authState.subscribe(res => console.log(res));
    this.lgServ.Cerrar();

  }

 
}

