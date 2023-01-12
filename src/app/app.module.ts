import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BingoContainerComponent } from './bingo-container/bingo-container.component';
import { BingoBoxComponent } from './bingo-box/bingo-box.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoContainerComponent,
    BingoBoxComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
