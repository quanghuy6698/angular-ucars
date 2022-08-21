import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdsCardComp } from "../ads-card/ads-card.comp";
import { CarCardCompModule } from "../car-card/car-card.module";
import { CarProductsComp } from "./car-products.comp";

@NgModule({
  imports: [CommonModule, CarCardCompModule],
  declarations: [CarProductsComp, AdsCardComp],
  exports: [CarProductsComp],
})
export class CarProductsCompModule {}
