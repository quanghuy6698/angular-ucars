import { Component, Input, OnInit } from "@angular/core";
import { CAR_BRANDS } from "src/app/constants/car-brands/car-brands.constants";
import { ICarModel } from "src/app/models/products/car.model";

@Component({
  selector: "car-card-comp",
  templateUrl: "./car-card.comp.html",
  styleUrls: ["./car-card.comp.scss"],
})
export class CarCardComp implements OnInit {
  @Input("car") car: ICarModel;
  public carBrand = CAR_BRANDS["bmw"];

  constructor() {}

  ngOnInit() {
    this.carBrand = CAR_BRANDS[this.car.brand];
  }
}
