import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "error-page",
  templateUrl: "./error.page.html",
  styleUrls: ["./error.page.scss"],
})
export class ErrorPage {
  constructor(private router: Router) {}

  backHomePage() {
    this.router.navigate(["home"]);
  }
}
