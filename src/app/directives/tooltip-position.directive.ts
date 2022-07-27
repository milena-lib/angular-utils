import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltipPosition]'
})
export class TooltipPositionDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
    const body = document.body,
    html = document.documentElement;

    const height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    this.el.nativeElement.classList.remove('bottom'); 
    this.el.nativeElement.classList.remove('top');

    if(event.clientY >= height - 50) {
      this.el.nativeElement.classList.add('top');
      this.el.nativeElement.classList.remove('bottom');
    }else {
      this.el.nativeElement.classList.remove('top');
      this.el.nativeElement.classList.add('bottom');
    }
  }
}
