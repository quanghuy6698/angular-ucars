import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeatureVehicleCardComp } from "./featured-vehicle-card.comp";

@NgModule({
  imports: [CommonModule],
  declarations: [FeatureVehicleCardComp],
  exports: [FeatureVehicleCardComp],
})
export class FeatureVehicleCardCompModule {}
