import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['../input-controls.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit, AfterViewInit {
  selectedIndex: number = 0;

  selectOptions = [
    {text: '', value: ''},    
    {text: 'תל אביב', value: '111'},
    {text: 'רמת גן', value: '222'},
    {text: 'פתח תקווה', value: '333'},
    {text: 'חולון', value: '444'},
    {text: 'ראשון לציון', value: '555'}
  ]

  @ViewChild('selectCtrl', {static: true}) elSelectCtrl: ElementRef;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const firstOptionValue = this.elSelectCtrl.nativeElement.options[this.selectedIndex].value;

    if(firstOptionValue) {
      this.elSelectCtrl.nativeElement.classList.add('selected');
    } else {
      this.elSelectCtrl.nativeElement.classList.remove('selected');
    }
  }
}
