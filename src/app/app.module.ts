import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChienComponent } from './chien/chien.component';
import { LionComponent } from './lion/lion.component';
import { ChatComponent } from './chat/chat.component';
import { ZooAnimalComponent } from './zoo-animal/zoo-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChienComponent,
    LionComponent,
    ChatComponent,
    ZooAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
