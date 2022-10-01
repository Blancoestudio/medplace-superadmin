import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-profession',
  templateUrl: './add-profession.component.html',
  styleUrls: ['./add-profession.component.scss']
})
export class AddProfessionComponent implements OnInit {

  @Input() edit: boolean = false;
  @Input() show: boolean = false;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  addProfessionModal: boolean = false;

  faXmark = faXmark;

  constructor() { }

  ngOnInit(): void {
  }

  addProfession() {
    this.addProfessionModal = !this.addProfessionModal
  }

  close() {
    this.onClose.emit(false);
    this.edit = true;
  }

}
