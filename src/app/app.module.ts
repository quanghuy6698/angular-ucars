import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./pages/home/home.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { ErrorPageModule } from "./pages/error/error.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, ErrorPageModule, HomeModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
