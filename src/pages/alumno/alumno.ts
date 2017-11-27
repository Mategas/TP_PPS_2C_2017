import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alumno } from '../../app/model/alumno';
import { AngularFireDatabase, } from 'angularfire2/database';
//import { Firebase } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html',
})
export class AlumnoPage {

  alumno:Alumno;
  listado:Observable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private afBD : AngularFireDatabase) {
    this.alumno = new Alumno();
    this.listado = this.afBD.list("Alumnos/").valueChanges();
  }

  //Da de alta al alumno en la base de datos
  Alta(){    
    this.afBD.database.ref("Alumnos/").push(this.alumno);
    //this.listado.push(this.alumno);
    //this.navCtrl.pop();
  }

  //Modifica al alumno seleccionado y lo guarda en la base de datos  
  Modificar(){
    //this.listado.
  }

  //Elimina al alumno de la base de datos  
  Eliminar(){
    
  }

  //No hace ninguna carga
  Cerrar()
  {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AlumnoPage');
  }

}
