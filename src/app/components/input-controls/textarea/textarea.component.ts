import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['../input-controls.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
