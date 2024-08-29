import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  public ItemCar: any [] = [];

  constructor() {}

  ViewItemCar(): any[] {
    return this.ItemCar;
  }
  addNewItemToCar(ProductWithId: any) {
    this.ItemCar.push(ProductWithId);
  }

  deleteItemToCar(ProductWithId: number) {
    const index = this.ItemCar.findIndex((item) => item.id === ProductWithId);
    if (index !== -1) {
      this.ItemCar.splice(index, 1);
    }
  }
  deleteArray() { 
    this.ItemCar = [];
  }
}