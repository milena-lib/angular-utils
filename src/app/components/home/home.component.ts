import { Component, OnInit } from '@angular/core';
import { ModalDraggableService } from '../modals/modal-draggable/modal-draggable.service';
import { ModalService } from '../modals/modal/modal.service';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  translations = {
    custModalCaption1: 'פתח חלון נגרר',
    custModalCaption2: 'פתח חלון יציב גבוה',
    closeCaption: 'סגור'
  }

  constructor(private modalService: ModalService, private modalDragService: ModalDraggableService) { }

  ngOnInit() {
  }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  openDragModal(id: string) {
    this.modalDragService.open(id);
}

  closeDragModal(id: string) {
      this.modalDragService.close(id);
  }

}
