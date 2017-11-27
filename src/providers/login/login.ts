import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Usuario } from '../../app/model/usuario';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  // Por constructor le paso la autenticación con angular
  constructor(private afAuth: AngularFireAuth) {
  }


  // Para loguear con Facebook (hay que habilitarlo desde Firebase
  // usando el ID/Key de la APP y en dashboard de Dev para Facebook)
  // con la URI de OAuth
  Facebook(){
    this.afAuth.auth
    .signInWithRedirect(new firebase.auth.FacebookAuthProvider())
    .then(res => console.log(res));
  }

  Google(){
    this.afAuth.auth
    .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then(res => console.log(res));
  }

  GitHub(){
    this.afAuth.auth
    .signInWithRedirect(new firebase.auth.GithubAuthProvider())
    .then(res => console.log(res));
  }

  Email(email: string, pass: string){
    this.afAuth.auth.signInWithEmailAndPassword(email,pass)
    .then(res => console.log(res));

  }





}
