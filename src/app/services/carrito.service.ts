import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  public ItemCar: number[] = [];

  constructor() { }

  ViewItemCar(): number[] {
    return this.ItemCar;
  }
  addNewItemToCar(ProductWithId: number) {
    this.ItemCar.push(ProductWithId);
  }

  deleteItemToCar(ProductWithId: number) {
    this.ItemCar.splice(ProductWithId);
  }
}