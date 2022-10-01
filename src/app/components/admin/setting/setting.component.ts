import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  edit: boolean = false;
  addProfessionModal: boolean = false;
  actionProfessionModal: boolean = false;

  action: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addProfession(action: string) {

    if (action === 'edit') {
      this.edit = true
    } else {
      this.edit = false
    }
    this.addProfessionModal = !this.addProfessionModal
  }

  actionProfession( action: string ) {
    this.actionProfessionModal = true;
    this.action = action;
  }

}
