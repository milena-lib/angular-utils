import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './components/modals/modal/modal.module';
import { ModalDraggableModule } from './components/modals/modal-draggable/modal-draggable.module';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputComponent } from './components/input-controls/input/input.component';
import { SelectComponent } from './components/input-controls/select/select.component';
import { ClickEscapeDirective } from './directives/click-escape.directive';
import { TextareaComponent } from './components/input-controls/textarea/textarea.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ClickEscapeDirective,
    TextareaComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    ModalDraggableModule,
    AppRoutingModule,
    DragDropModule
  ],
  exports: [
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
