import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('btn1') btn1!: any;

  addProfessionModal: boolean = false;

  faXmark = faXmark;

  job = {
    name: '',
    skippable: true
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  addProfession(form: NgForm) {
    const skippable = form.value['data-required'] === 'true' ? false : true;
    form.value.skippable = skippable;
    delete form.value['data-required'];
    if (!this.edit) {
      this.api.addJob(form.value).subscribe(data => {
        console.log(data)
        this.addProfessionModal = !this.addProfessionModal
        this.onClose.emit(false);
        form.resetForm();
      });
    }
    else{
      this.api.editJob(form.value).subscribe(data => {
        console.log(data)
        this.addProfessionModal = !this.addProfessionModal
        this.onClose.emit(false);
        form.resetForm();
      });
    }
  }

  close() {
    this.onClose.emit(false);
  }

}
