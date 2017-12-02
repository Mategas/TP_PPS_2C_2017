import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginProvider } from '../../providers/login/login';
import { Usuario } from '../../app/model/usuario';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public loginServ : LoginProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  usuario : Usuario;

  ionViewDidLoad() {
    console.log(this.loginServ.afAuth.auth.currentUser.email);
  }




}
