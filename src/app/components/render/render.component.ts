import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
})
export class RenderComponent {
  @Input() receive: any;

  constructor(private readonly CarSrv:CarritoService) {}

  
  receiveId(id: number) {
    this.CarSrv.deleteItemToCar(id);
   }
}
