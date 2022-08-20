import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CarFilterComp } from "src/app/components/car-filter/car-filter.comp";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CarFilterComp],
  exports: [CarFilterComp],
})
export class CarFilterCompModule {}
