import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardComponent } from '../components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    CurrencyPipe
  ],
  declarations: [HomePage,CardComponent],
  providers:[HttpService]
})
export class HomePageModule {}
