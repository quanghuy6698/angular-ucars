import { NgModule } from "@angular/core";
import { HeaderContactInfoComp } from "src/app/components/header-contact-info/header-contact-info.comp";
import { HomePage } from "./home.page";

@NgModule({
  imports: [],
  declarations: [HomePage, HeaderContactInfoComp],
  exports: [HomePage, HeaderContactInfoComp],
})
export class HomeModule {}
