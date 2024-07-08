import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '@core/modules/layout/pages/landing-page/landing-page.component';
import { LayoutComponent } from '@core/modules/layout/layout.component';
import { HomePageComponent } from '@core/modules/layout/components/home-page/home-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [{ path: '', component: HomePageComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
