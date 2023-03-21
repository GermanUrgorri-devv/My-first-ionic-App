import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private alertController: AlertController) { }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Mensaje Importante',
      message: 'Estoy probando como funcionan los botones y las alertas.',
      buttons: ['OK'],
    });

    await alert.present();

  }
  ngOnInit() {
  }

}
