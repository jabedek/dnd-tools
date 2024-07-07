import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeDataComponent } from './dev-only/see-data/see-data.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AccessDirective } from './directives/access.directive';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { ButtonComponent } from './components/controls/button/button.component';
import { RangeComponent } from './components/controls/range/range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupCustomComponent } from './components/popup-custom/popup-custom.component';
import { PopupGlobalComponent } from './components/popup-global/popup-global.component';
import { FreeDraggingDirective } from './directives/free-dragging.directive';
import { MutableDirective } from './directives/mutable.directive';
import { TextComponent } from './components/controls/text/text.component';
import { RadioComponent } from './components/controls/radio/radio.component';
import { DurationPickerComponent } from './components/controls/duration-picker/duration-picker.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UserActivityMonitorProgressBarComponent } from './components/user-activity-monitor/user-activity-monitor-progress-bar.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Lang } from './models/enums';
import { TestingComponent } from './app-form/testing/testing.component';
import { PartialFormAComponent } from './app-form/testing/components/partial-form-a/partial-form-a.component';
import { PartialFormBComponent } from './app-form/testing/components/partial-form-b/partial-form-b.component';
import { PartialFormCComponent } from './app-form/testing/components/partial-form-c/partial-form-c.component';

@NgModule({
  declarations: [
    SeeDataComponent,
    BurgerMenuComponent,
    SpinnerComponent,
    AccessDirective,
    CheckboxComponent,
    ButtonComponent,
    RangeComponent,
    TextComponent,
    PopupCustomComponent,
    PopupGlobalComponent,
    FreeDraggingDirective,
    MutableDirective,
    RadioComponent,
    DurationPickerComponent,
    ProgressBarComponent,
    UserActivityMonitorProgressBarComponent,
    CountdownTimerComponent,
    TestingComponent,
    PartialFormAComponent,
    PartialFormBComponent,
    PartialFormCComponent,
  ],
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
    BurgerMenuComponent,
    SpinnerComponent,
    AccessDirective,
    CheckboxComponent,
    ButtonComponent,
    RangeComponent,
    TextComponent,
    PopupCustomComponent,
    PopupGlobalComponent,
    FreeDraggingDirective,
    MutableDirective,
    RadioComponent,
    DurationPickerComponent,
    ProgressBarComponent,
    UserActivityMonitorProgressBarComponent,
    CountdownTimerComponent,
    TestingComponent,
    PartialFormAComponent,
  ],
})
export class SharedModule {}
