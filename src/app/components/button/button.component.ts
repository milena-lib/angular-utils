import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() caption: string;
  @Input() color: string;
  @Output() fnClick = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.fnClick.emit()
  }
}
