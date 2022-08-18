import { Routes } from "@angular/router";
import { ErrorPage } from "./pages/error/error.page";
import { HomePage } from "./pages/home/home.page";

export const appRoutes: Routes = [
  {
    path: "home",
    component: HomePage,
  },
  // {
  //   path: "rxjs",
  //   loadChildren: () => import("./pages/rxjs/rxjs.module").then((mdl) => mdl.RxjsModule),
  // },
  // {
  //   path: "css-bem",
  //   loadChildren: () => import("./pages/css-bem/css-bem.module").then((mdl) => mdl.CssBemModule),
  // },
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
