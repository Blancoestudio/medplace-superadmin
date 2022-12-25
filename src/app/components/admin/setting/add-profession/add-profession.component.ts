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
  @Input() job = {
    name: '',
    skippable: false,
    requireVacunas: true
  };
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  
  editable = false;
  addProfessionModal: boolean = false;

  faXmark = faXmark;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  addProfession() {
    if (!this.edit) {
      this.api.addJob(this.job).subscribe(data => {
        console.log(data);
        this.addProfessionModal = !this.addProfessionModal;
        this.onClose.emit(false);
        this.job = {name: '', skippable: false, requireVacunas: true};
      });
    }
    else{
      this.api.editJob(this.job).subscribe(data => {
        console.log(data)
        this.addProfessionModal = !this.addProfessionModal
        this.onClose.emit(false);
        this.job = {name: '', skippable: false, requireVacunas: true};
        this.editable = false;
      });
    }
  }
  
  getProfession(id: string){
    this.api.getJob(id).subscribe(data => {
      console.log(data);
      this.job = data;
    })
  }

  close() {
    this.editable = false;
    this.job = {name: '', skippable: false, requireVacunas: true};
    this.onClose.emit(false);
  }

}
