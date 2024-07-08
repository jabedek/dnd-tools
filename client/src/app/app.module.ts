import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { environment } from '@env/environment';
import { Lang } from '@shared/models/enums';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

if (environment.environmentName === 'production') {
  console.log = () => ({});
} else {
  const ports = ['4200', '4201'];
  if (!ports.includes(`${window.location.port}`)) {
    console.error(
      `[${environment.environmentName}] Wrong port. Use only these ports: ` +
        ports.join(', ') +
        '. Otherwise external services like Auth0 may not work.',
    );
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: Lang.pl,
    }),
    //
    AppRoutingModule,
    //
    // App
    CoreModule,
    SharedModule,
    // extModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
