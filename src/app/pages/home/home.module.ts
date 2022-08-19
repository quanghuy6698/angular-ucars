import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarFilterComp } from "src/app/components/car-filter/car-filter.comp";
import { GetStartedBannerComp } from "src/app/components/get-started-banner/get-started-banner.comp";
import { HeaderContactInfoComp } from "src/app/components/header-contact-info/header-contact-info.comp";
import { NavbarComp } from "src/app/components/navbar/navbar.comp";
import { HomePage } from "./home.page";

@NgModule({
  imports: [CommonModule],
  declarations: [HomePage, HeaderContactInfoComp, NavbarComp, GetStartedBannerComp, CarFilterComp],
  exports: [HomePage],
})
export class HomeModule {}
