import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

// Keycode for ESCAPE
// const ESCAPE = 27;

@Directive({
  selector: '[appClickEscape]'
})
export class ClickEscapeDirective {
  @Output() clickEscape = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }
  // Listen on keydown events on a document level
  @HostListener('window:keydown', ['$event']) 
    public handleKeyDown(event: KeyboardEvent) {
      alert("event.key: " + event.key);
      if (event.key === 'ESCAPE') {
        this.clickEscape.emit();
      }
    } 
}
