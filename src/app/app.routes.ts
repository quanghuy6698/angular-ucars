import { Routes } from "@angular/router";
import { ErrorPage } from "./pages/error/error.page";
import { HomePage } from "./pages/home/home.page";

export const appRoutes: Routes = [
  {
    path: "home",
    component: HomePage,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "error",
    component: ErrorPage,
  },
  {
    path: "**",
    redirectTo: "/error",
  },
];
