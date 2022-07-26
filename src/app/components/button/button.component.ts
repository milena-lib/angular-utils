import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  
  /**
    * Is this the principal call to action on the page?
    */
    @Input()
    primary = false;

  /**
     * Checks if the button should be disabled
     */
    @Input()
    disabled = false;

   /**
    * What background color to use
    */
    @Input()
    backgroundColor?: string;
  
    /**
      * How large should the button be?
      */
    @Input()
    size: 'small' | 'medium' | 'large' = 'medium';
  
    /**
      * Button contents
      *
      * @required
      */
    @Input()
    label = 'Button';    
    
    /**
      * Optional click handler
      */
     @Output()
      onClick = new EventEmitter<Event>();
  
    public get classes(): string[] {
      const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
      
      return ['storybook-button', `storybook-button--${this.size}`, mode];
    }

    public get isDisabled(): boolean {
      console.log("isDisabled: ", this.disabled);
      return this.disabled;
    }

    constructor() { }

    ngOnInit(): void {
    }


}
