import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { BeamComponent } from './beam/beam.component';
import { RodComponent } from './rod/rod.component';
import { BeadComponent } from './bead/bead.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    BeamComponent,
    RodComponent,
    BeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
