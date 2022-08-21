import { Component, Input } from "@angular/core";
import { BaseComp } from "../base.comp";
import data from "src/assets/data/featured-vehicles/featured-vehicles-data.json";

@Component({
  selector: "featured-vehicles-comp",
  templateUrl: "./featured-vehicles.comp.html",
  styleUrls: ["./featured-vehicles.comp.scss"],
})
export class FeaturedVehiclesComp extends BaseComp {
  public featuredVehicles = data.featuredVehiclesData;

  constructor() {
    super();
  }
}
