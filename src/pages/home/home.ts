
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PersonajesProvider } from '../../providers/personajes/personajes';
import { VistaPage } from '../vista/vista';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personajes=[];
  constructor(public navCtrl: NavController, _personajes:PersonajesProvider) {
    this.personajes = _personajes.PERSONAJES;
  }



  cambiar(personaje){
    //console.log(personaje);
    this.navCtrl.push(VistaPage,{
      personaje:personaje
    });
    
  }



}
