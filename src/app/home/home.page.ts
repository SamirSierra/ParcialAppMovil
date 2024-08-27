import { Category } from './../interfaces/IE-comerce';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IEComerce } from '../interfaces/IE-comerce';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public products: IEComerce[] = [];

  url = environment.URL_BASE + 'products';

  constructor(
    private readonly httpSrv: HttpService,
    private readonly navCtr: NavController
  ) { }

  async ngOnInit() {
    this.products = await this.httpSrv.get<IEComerce[]>(this.url);
  }

  public doNavegate(id: number) {
    console.log(id);
    this.navCtr.navigateForward('details/' + id);
  }
  async OptionSelection(event: any) {
    this.products = await this.httpSrv.get<IEComerce[]>(this.url + '/category/' + event.detail.value)
  }
}