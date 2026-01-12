import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DxAutocompleteModule, DxBarGaugeModule, DxBoxModule, DxBulletModule, DxButtonGroupModule, DxButtonModule, DxCalendarModule, DxChartModule, DxCheckBoxModule, DxColorBoxModule, DxListModule } from 'devextreme-angular';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
  DxAutocompleteModule,
  DxBarGaugeModule,
  DxBulletModule,
  DxBoxModule,
  DxButtonModule,
  DxButtonGroupModule,
  DxListModule,
  DxCalendarModule,
  DxChartModule,
  DxCheckBoxModule,
  DxColorBoxModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}