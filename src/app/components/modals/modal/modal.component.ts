import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;
  
  isModalOpened: boolean = false;

  //close modal by press to Escape button
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(event.key === 'Escape' && this.isModalOpened) {
      this.close();
    }
  }

  constructor(private modalService: ModalService, private el: ElementRef) {
    
   }

  ngOnInit(): void {
    this.element = this.el.nativeElement;
    // ensure id attribute exists
    if (!this.id) {
        console.error('modal must have an id');
        return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'win-modal') {
          this.close();
      }
    });
 
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);       
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  // open modal
  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('win-modal-open');
      this.isModalOpened = true;
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('win-modal-open');
      this.isModalOpened = false;
  }

  
  // onClickEscape($event) {
  //   debugger;
  // }
}
