import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqG-8OQg9eI8Cei7imBkxBx3XyEs1Zteg',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
