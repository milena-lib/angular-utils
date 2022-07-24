import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {

  @Input() text: string;
  @Input() tooltipText: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
