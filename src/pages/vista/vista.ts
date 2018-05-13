import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the VistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vista',
  templateUrl: 'vista.html',
})
export class VistaPage {
  public personaje;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    this.personaje = navParams.get('personaje');
    this.viewCtrl.setBackButtonText("Atras");
    console.table(this.personaje);
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText("Atras");
  }

  regresar(){
    this.navCtrl.pop();
  }

}
