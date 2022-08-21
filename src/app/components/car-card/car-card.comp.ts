import { Component, Input, OnInit } from "@angular/core";
import { CAR_BRANDS } from "src/app/constants/car-brands/car-brands.constants";

@Component({
  selector: "car-card-comp",
  templateUrl: "./car-card.comp.html",
  styleUrls: ["./car-card.comp.scss"],
})
export class CarCardComp implements OnInit {
  @Input("car") car: any;
  public carBrand = CAR_BRANDS["bmw"];

  constructor() {}

  ngOnInit() {
    this.carBrand = CAR_BRANDS[this.car.brand];
  }
}
