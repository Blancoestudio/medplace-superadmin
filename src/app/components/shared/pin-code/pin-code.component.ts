import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-code',
  templateUrl: './pin-code.component.html',
  styleUrls: ['./pin-code.component.scss']
})
export class PinCodeComponent implements OnInit {

  pinCode: number[] = [];
  @Input() code: number = 1234;

  public get cod() : number[] {
    let output = [],
    sNumber = this.code.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }
    return output;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
