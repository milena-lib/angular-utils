import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDraggableComponent } from './modal-draggable.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ModalDraggableComponent],
    exports: [ModalDraggableComponent]
})
export class ModalDraggableModule { }