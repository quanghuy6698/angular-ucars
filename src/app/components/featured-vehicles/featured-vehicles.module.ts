import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeatureVehicleCardCompModule } from "../featured-vehicle-card/featured-vehicle-card.module";
import { FeaturedVehiclesComp } from "./featured-vehicles.comp";

@NgModule({
  imports: [CommonModule, FeatureVehicleCardCompModule],
  declarations: [FeaturedVehiclesComp],
  exports: [FeaturedVehiclesComp],
})
export class FeaturedVehiclesCompModule {}
