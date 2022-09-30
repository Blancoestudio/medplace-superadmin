import { Component, OnInit } from '@angular/core';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  shareCodeModal: boolean = false;
  codeShared: boolean = false;

  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

  adminList: any[] = [
    { open: false },
    { open: false }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleShareModal( state: boolean ) {
    this.shareCodeModal = state;
    if (!state) {
      this.codeShared = false;
      this.shareCodeModal = false;
    }
  }

}
