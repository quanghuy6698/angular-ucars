import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BusinessIntroComp } from "src/app/components/business-intro/business-intro.comp";
import { CarFilterCompModule } from "src/app/components/car-filter/car-filter.module";
import { CarProductsCompModule } from "src/app/components/car-products/car-products.module";
import { FeaturedVehiclesCompModule } from "src/app/components/featured-vehicles/featured-vehicles.module";
import { FooterComp } from "src/app/components/footer/footer.comp";
import { GetStartedBannerComp } from "src/app/components/get-started-banner/get-started-banner.comp";
import { HeaderContactInfoComp } from "src/app/components/header-contact-info/header-contact-info.comp";
import { NavbarComp } from "src/app/components/navbar/navbar.comp";
import { QuestionsBannerComp } from "src/app/components/questions-banner/questions-banner.comp";
import { ServiceProvidedComp } from "src/app/components/service-provided/service-provided.comp";
import { HomePage } from "./home.page";

@NgModule({
  imports: [CommonModule, CarFilterCompModule, CarProductsCompModule, FeaturedVehiclesCompModule],
  declarations: [
    HomePage,
    HeaderContactInfoComp,
    NavbarComp,
    GetStartedBannerComp,
    ServiceProvidedComp,
    QuestionsBannerComp,
    FooterComp,
    BusinessIntroComp,
  ],
  exports: [HomePage],
})
export class HomeModule {}
