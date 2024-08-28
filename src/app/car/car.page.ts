import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { IEComerce } from '../interfaces/IE-comerce';
import { CarritoService } from '../services/carrito.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  constructor(
    private readonly httpSrv: HttpService,
    private readonly SrvCar: CarritoService
  ) {}

  public response!: IEComerce;
  
  public all : any[] = this.SrvCar.ViewItemCar();

  async ngOnInit() {
    const url = environment.URL_BASE + 'products/' + this.all;
    this.response = await this.httpSrv.get<IEComerce>(url);
    console.log(this.all);
  }

}
