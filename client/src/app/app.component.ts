import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { handlePyszneData } from '@assets/pyszne/handlePyszneData';
import { FirebaseAuthService } from '@core/firebase/firebase-auth.service';
import { FirebaseUsersService } from '@core/firebase/firebase-users.service';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { UserActivityMonitorService } from '@shared/components/user-activity-monitor/user-activity-monitor.service';
import { Lang } from '@shared/models/enums';
import { AppState } from '@store/app-state';
import { selectAuth } from '@store/auth/auth.selectors';
import { Subject, debounce, debounceTime, interval, map, takeUntil } from 'rxjs';
import { comparePerformance } from './test';
import { tryUntil } from './meta-programming-experiments/rxjs/operators/tryUntil';
import {
  createNamesArray,
  getArrayToVerticalList,
  sortNamesAlph,
  sortNamesLength,
} from '@features/entertainment/asian-poker/utils/random.helpers';
import { names1, names2, names3, namesAll } from '@features/entertainment/asian-poker/utils/names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'all-nice-stuff';
  destroy$ = new Subject<void>();
  firebase$ = this.store.select(selectAuth).pipe(
    map((auth) => auth.firebase),
    takeUntil(this.destroy$),
  );

  constructor(
    private auth: FirebaseAuthService,
    private store: Store<AppState>,
    translate: TranslateService,
    private router: Router,
    private activityMonitor: UserActivityMonitorService,
  ) {
    handlePyszneData();
    // this.activityMonitor.scheduleCheckerForUserWentAFK();
    // this.router.events.pipe(takeUntil(this.destroy$)).subscribe(() => {
    //   this.auth.noteUserBrowserActivity('open');
    //   window.addEventListener('beforeunload', async () => await this.auth.noteUserBrowserActivity('close'), { once: true });
    // });

    this.auth.refreshLogin(false);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(Lang.pl);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(Lang.pl);

    this.testTryUntil();
    setTimeout(() => {
      this.destroy$.next();
      this.destroy$.complete();
    }, 3000);

    const all = Array.from(new Set(createNamesArray(namesAll)));

    // console.log('#', all.random(2));
    // console.log(all.random(2));
    // console.log(all.random(2));

    // const names = sortNamesAlph(names2);
    // console.log(names);

    const a = createNamesArray(sortNamesAlph(namesAll));
    // console.log(a);
    // console.log(sortNamesLength(a));
  }

  testTryUntil() {
    console.log('testTryUntil');

    const source$ = interval(1000);
    source$.pipe(tryUntil(5, this.destroy$)).subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed after 5 emissions or when destroySubject emits'),
    });
  }

  ngAfterViewInit() {
    this.activityMonitor.initCheckers();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
