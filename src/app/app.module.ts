import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CanvasComponent } from './component/canvas/canvas.component';
import { CanvasBoxComponent } from './component/canvas-box/canvas-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CanvasComponent,
    CanvasBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
