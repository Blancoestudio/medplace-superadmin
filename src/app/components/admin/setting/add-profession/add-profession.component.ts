import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';

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

  job = {
    name: '',
    skippable: true
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  addProfession() {
    this.api.addJob(this.job).subscribe(data => {
      console.log(data)
      this.addProfessionModal = !this.addProfessionModal
      this.onClose.emit(false);
    });
  }

  close() {
    this.onClose.emit(false);
    this.edit = true;
  }

}
