import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEComerce } from 'src/app/interfaces/IE-comerce';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public response!: IEComerce;


  constructor(
    private readonly httpSrv: HttpService,
    private readonly params: ActivatedRoute,
    private readonly SrvCar: CarritoService
  ) {}

  async ngOnInit() {
    this.params.params.subscribe(async (params) => {
      const url = environment.URL_BASE + 'products/' + params['id'];
      console.log(params);
      this.response = await this.httpSrv.get<IEComerce>(url);
      console.log(this.response);
    });
  }

  sendToCar() { 
    this.SrvCar.addNewItemToCar({
      id: this.response.id,

      price: this.response.price,
      title: this.response.title,
      image: this.response.image,
    });
    console.log(this.SrvCar.ViewItemCar());
  }
  


}
