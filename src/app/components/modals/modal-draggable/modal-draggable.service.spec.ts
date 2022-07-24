import { TestBed } from '@angular/core/testing';

import { ModalDraggableService } from './modal-draggable.service';

describe('ModalDraggableService', () => {
  let service: ModalDraggableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDraggableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
