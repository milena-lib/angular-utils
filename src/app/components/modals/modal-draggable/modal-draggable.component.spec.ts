import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDraggableComponent } from './modal-draggable.component';

describe('ModalDraggableComponent', () => {
  let component: ModalDraggableComponent;
  let fixture: ComponentFixture<ModalDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDraggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
