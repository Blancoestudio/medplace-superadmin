import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';

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
  
  jobs = [{
    name: '',
    skippable: ''
  }];
  
  form = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getJobs().subscribe(data => {
      this.jobs = data;
    })
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

  getProfessions($event: any){
    this.addProfessionModal = $event;
    this.api.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }
}
