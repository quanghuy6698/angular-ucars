import { Component, Input } from "@angular/core";
import { IFeaturedVehicle } from "src/app/models/products/featured-vehicle.model";

@Component({
  selector: "featured-vehicle-card-comp",
  templateUrl: "./featured-vehicle-card.comp.html",
  styleUrls: ["./featured-vehicle-card.comp.scss"],
})
export class FeatureVehicleCardComp {
  @Input("featuredVehicle") featuredVehicle: IFeaturedVehicle;

  constructor() {}
}
