import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullPageComponent } from './core/layout/full-page/full-page.component';
import { BlankPageComponent } from './core/layout/blank-page/blank-page.component';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: "",
    component: FullPageComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
      },
      {
        path: "home",
        loadChildren: () => 
         import("./home/home.module").then( (mod) => mod.HomeModule)
      },
      {
        path: "categories",
        loadChildren: () => 
          import("./category/category.module").then( mod => mod.CategoryModule)
      },
      {
        path: "profile",
        loadChildren: () => 
          import("./profile/profile.module").then( mod => mod.ProfileModule)
      }
    ],
  },
  {
    path: "",
    component: BlankPageComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
      },
      {
        path: "public",
        component: ErrorPageComponent
      },
      {
        path: "**",
        component: ErrorPageComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
