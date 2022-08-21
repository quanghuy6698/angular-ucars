import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorPage } from "./error.page";

@NgModule({
  imports: [RouterModule],
  declarations: [ErrorPage],
  exports: [ErrorPage],
})
export class ErrorPageModule {}
