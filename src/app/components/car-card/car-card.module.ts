import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarCardComp } from "./car-card.comp";

@NgModule({
  imports: [CommonModule],
  declarations: [CarCardComp],
  exports: [CarCardComp],
})
export class CarCardCompModule {}
