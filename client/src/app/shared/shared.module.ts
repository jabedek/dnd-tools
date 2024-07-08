import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeDataComponent } from './dev-only/see-data/see-data.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupCustomComponent } from './components/popup-custom/popup-custom.component';
import { PopupGlobalComponent } from './components/popup-global/popup-global.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Lang } from './models/enums';

@NgModule({
  declarations: [SeeDataComponent, SpinnerComponent, PopupCustomComponent, PopupGlobalComponent, ProgressBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: Lang.pl,
      isolate: true,
    }),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SeeDataComponent,
    SpinnerComponent,

    PopupCustomComponent,
    PopupGlobalComponent,

    ProgressBarComponent,
  ],
})
export class SharedModule {}
