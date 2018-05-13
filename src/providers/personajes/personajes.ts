import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonajesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonajesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PersonajesProvider Provider');
  }

  PERSONAJES = [
    {
      img:'assets/img/han-solo.jpg',
      nombre: 'Han Solo',
      titulo: 'Cazarrecompensas'
    },
    {
      img:'assets/img/rey.jpg',
      nombre: 'Rey',
      titulo: 'Recolectora'
    },
    {
      img:'assets/img/finn.jpg',
      nombre: 'Finn',
      titulo: 'Piloto'
    },
    {
      img:'assets/img/leia.jpg',
      nombre: 'Leia',
      titulo: 'Princesa'
    },
  ];



}
