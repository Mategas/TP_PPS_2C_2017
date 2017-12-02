import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  // Por constructor le paso la autenticación con angular
  constructor(public afAuth: AngularFireAuth) {
  }


  // Para loguear con Facebook (hay que habilitarlo desde Firebase
  // usando el ID/Key de la APP y en dashboard de Dev para Facebook)
  // con la URI de OAuth
  Facebook(){
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => { this.afAuth.auth.getRedirectResult().then(respuesta => {console.log(respuesta)})})
    .catch(error => { throw error });
  }

  Google(){
    this.afAuth.auth
    .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then(res => { this.afAuth.auth.getRedirectResult().then(respuesta => {console.log(respuesta)})})
    .then(res => console.log(res));
  }

  GitHub(){
    this.afAuth.auth
    .signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then(res => { this.afAuth.auth.getRedirectResult().then(respuesta => {console.log(respuesta)})})
    .then(res => console.log(res));
  }

  Email(email: string, pass: string){
    this.afAuth.auth.signInWithEmailAndPassword(email,pass)
    .then(res => console.log(res));

  }

  Cerrar()
  {
    this.afAuth.auth.signOut();
  }






}
