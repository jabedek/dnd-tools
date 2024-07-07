import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { APP_ROUTES } from './routes.const';
import { fromEvent, takeUntil, tap } from 'rxjs';
import { BaseComponent } from '@shared/abstracts/base/base.component';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { AppRoute } from './routes.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends BaseComponent {
  routes = APP_ROUTES;

  @Output() closeOutclick = new EventEmitter<void>();

  currentRoute = '';

  fromEvent$ = fromEvent(document, 'mousedown').pipe(
    tap((event) => {
      const target = event.target as HTMLElement;
      const classes = target.classList;
      if (classes.contains('burger__line') || classes.contains('burger')) {
        return;
      } else if (!this.el.nativeElement.contains(target)) {
        this.closeOutclick.emit();
      }
    }),
  );

  constructor(
    public el: ElementRef,
    private store: Store<AppState>,
  ) {
    super('NavbarComponent');

    this.fromEvent$.pipe(takeUntil(this.__destroy)).subscribe();
  }

  handleRoute(pickedRoute: AppRoute) {
    this.routes.forEach((route) => {
      if (pickedRoute.path !== route.path && route.type === 'multi') {
        route.uiOpen = false;
      }
    });

    if (pickedRoute.type === 'multi') {
      pickedRoute.uiOpen = !pickedRoute.uiOpen;
    } else {
      this.currentRoute = pickedRoute.path;
    }
  }
}
