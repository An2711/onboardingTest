import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepOneMajorGroupSelectionComponent } from './step-one-major-group-selection/step-one-major-group-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    StepOneMajorGroupSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
