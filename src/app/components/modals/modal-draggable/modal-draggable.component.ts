import { Component, ElementRef, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalDraggableService } from './modal-draggable.service';

@Component({
  selector: 'app-modal-draggable',
  templateUrl: './modal-draggable.component.html',
  styleUrls: ['./modal-draggable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalDraggableComponent implements OnInit {

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

  constructor(private modalService: ModalDraggableService, private el: ElementRef) {
    
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
      if (el.target.className === 'drag-modal') {
          this.close();
      }
    });
 
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);   
    
    // draggable modal
    this.draggableModal();
    
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  // open modal
  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('drag-modal-open');
      this.isModalOpened = true;
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('drag-modal-open');
      this.isModalOpened = false;
  }

  draggableModal() {
    var get = function(el) {
      if (typeof el === 'string') {
        return document.querySelector(el);
      }
      return el;
    };
    var dragable = function(parentEl, dragEl) {
      var parent = get(parentEl);
      var target = get(dragEl);
      var drag = false;
      var offsetX = 0;
      var offsetY = 0;
      var mousemoveTemp = null;
    
      if (target) {
        var mouseX = function(e) {
          if (e.pageX) {
            return e.pageX;
          }
          if (e.clientX) {
            return e.clientX + (document.documentElement.scrollLeft ?
              document.documentElement.scrollLeft :
              document.body.scrollLeft);
          }
          return null;
        };
    
        var mouseY = function(e) {
          if (e.pageY) {
            return e.pageY;
          }
          if (e.clientY) {
            return e.clientY + (document.documentElement.scrollTop ?
              document.documentElement.scrollTop :
              document.body.scrollTop);
          }
          return null;
        };
        
        var move = function (x, y) {
          var xPos = parseInt(target.style.left) || 0;
          var yPos = parseInt(target.style.top) || 0;
    
          target.style.left = (xPos + x) + 'px';
          target.style.top  = (yPos + y) + 'px';
        };
        
        var mouseMoveHandler = function (e) {
          e = e || window.event;
          if(!drag){return true};
    
          var x = mouseX(e);
          var y = mouseY(e);
          if (x != offsetX || y != offsetY) {
            move(x - offsetX, y - offsetY);
            offsetX = x;
            offsetY = y;
          }
          return false;
        };
        
        var start_drag = function (e) {
          e = e || window.event;
    
          offsetX=mouseX(e);
          offsetY=mouseY(e);
          drag=true; // basically we're using this to detect dragging
    
          // save any previous mousemove event handler:
          if (document.body.onmousemove) {
            mousemoveTemp = document.body.onmousemove;
          }
          document.body.onmousemove = mouseMoveHandler;
          return false;
        };
        
        var stop_drag = function () {
          drag=false;      
    
          // restore previous mousemove event handler if necessary:
          if (mousemoveTemp) {
            document.body.onmousemove = mousemoveTemp;
            mousemoveTemp = null;
          }
          return false;
        };
        
        parent.onmousedown = start_drag;
        parent.onmouseup = stop_drag;
      }
    }
    
    dragable('.drag-modal', '.drag-modal-body');
  }

}
