import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { IEComerce } from '../interfaces/IE-comerce';
import { CarritoService } from '../services/carrito.service';
import { environment } from 'src/environments/environment.prod';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage {
  constructor(
    private readonly SrvCar: CarritoService,
    private alertCtlr: AlertController
  ) {}

  public totalPay: number = 0;

  public all: any[] = this.SrvCar.ViewItemCar();

  ionViewWillEnter() {
    this.all = this.SrvCar.ViewItemCar();
    console.log(this.all);
    this.totalPay = this.all.reduce((n1, n2) => {
      return n1 + n2.price;
    }, 0);
    console.log(this.totalPay);
  }
  async showPaymentConfirmation() {
    const alert = await this.alertCtlr.create({
      header: 'Payment Successful',
      message: 'Your payment has been processed successfully!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
