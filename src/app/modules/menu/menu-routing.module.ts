import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "contact-us",
        loadChildren: () =>
          import("./../contact-us/contact-us.module").then(
            (m) => m.ContactUsPageModule
          ),
      },
      {
        path: "policy",
        loadChildren: () =>
          import("./../policy/policy.module").then((m) => m.PolicyPageModule),
      },
      {
        path: "about",
        loadChildren: () =>
          import("./../about/about.module").then((m) => m.AboutPageModule),
      },
      {
        path: "favourites",
        loadChildren: () =>
          import("./../favourites/favourites.module").then(
            (m) => m.FavouritesPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
