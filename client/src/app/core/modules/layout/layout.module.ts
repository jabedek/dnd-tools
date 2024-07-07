import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/header/components/navbar/navbar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SharedModule } from '@shared/shared.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    NavbarComponent,
    LandingPageComponent,
    HomePageComponent,
    LogoComponent,
    PopupComponent,
  ],
  imports: [CommonModule, RouterModule.forChild([]), SharedModule, FormsModule, ReactiveFormsModule],
  exports: [LayoutComponent, LandingPageComponent, HomePageComponent, PopupComponent],
})
export class LayoutModule {}
