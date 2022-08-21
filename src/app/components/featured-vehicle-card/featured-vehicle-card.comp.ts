import { Component, Input } from "@angular/core";

@Component({
  selector: "featured-vehicle-card-comp",
  templateUrl: "./featured-vehicle-card.comp.html",
  styleUrls: ["./featured-vehicle-card.comp.scss"],
})
export class FeatureVehicleCardComp {
  @Input("featuredVehicle") featuredVehicle: any;

  constructor() {}
}
