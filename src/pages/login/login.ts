import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : string;
  password : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private servicioLogin: LoginProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Log(tipo : string)
  {
    switch (tipo)
    {
      case 'FB':
        this.servicioLogin.Facebook();
        break;
      case 'GO':
        this.servicioLogin.Google();
        break;
      case 'GH':
        this.servicioLogin.GitHub();
        break;
      case 'EM':
        this.servicioLogin.Email(this.email, this.password);
        break;

    }
    
  }

}
