import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from '@core/data-manager.service';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '@shared/models/enums';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnDestroy {
  title = 'all-nice-stuff';
  destroy$ = new Subject<void>();

  constructor(
    translate: TranslateService,
    private router: Router,
    private dataManager: DataManagerService,
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(Lang.pl);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(Lang.pl);

    // this.dataManager.getNamesJSON().subscribe((d) => console.log(d));
    this.dataManager.saveNamesJSON().subscribe((d) => console.log(d));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
