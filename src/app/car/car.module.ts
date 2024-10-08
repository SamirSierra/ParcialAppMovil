import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarPageRoutingModule } from './car-routing.module';
import { CarPage } from './car.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { RenderComponent } from '../components/render/render.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [CarPage, RenderComponent],
  providers: [HttpService],
})
export class CarPageModule {}
