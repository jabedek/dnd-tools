import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="wrapper">
      <app-popup></app-popup>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./layout.component.scss'],
  // hostDirectives: [MousewheelDirective],
})
export class LayoutComponent {}
