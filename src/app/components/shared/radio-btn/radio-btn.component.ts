import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.scss']
})
export class RadioBtnComponent implements OnInit {

  @Input() radioName: string = '';
  @Input() radioChecked: boolean = false;
  @Output() checkedState: EventEmitter<boolean> = new EventEmitter();

  faCircle = faCircle;
  faCircleDot = faCircleDot;

  constructor() { }

  ngOnInit(): void {
  }

  toggleState(radioCmp: HTMLInputElement) {
    radioCmp.checked = !radioCmp.checked
    this.checkedState.emit(this.radioChecked);
    console.log(radioCmp.checked);

  }

}
