import { Component, Input } from "@angular/core";
import { BaseComp } from "../base.comp";
import data from "src/assets/data/cars/cars-data.json";

@Component({
  selector: "car-products-comp",
  templateUrl: "./car-products.comp.html",
  styleUrls: ["./car-products.comp.scss"],
})
export class CarProductsComp extends BaseComp {
  public cars = data.carsData;

  constructor() {
    super();
  }
}
