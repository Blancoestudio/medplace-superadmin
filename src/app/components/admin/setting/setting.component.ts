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
  addEnterpriseModal: boolean = false;
  actionProfessionModal: boolean = false;
  actionEnterpriseModal: boolean = false;

  action: string = '';
  loading: boolean = true;
  
  jobs = [{
    name: '',
    skippable: false,
    requireVacunas: true,
    _id: ''
  }];
  
  selJob = {
    name: '',
    skippable: false,
    requireVacunas: true,
    id: ''
  };
  
  selJobs: string[] = [];
  selId: string = '';

  selUnits: string[] = [];
  unids: any = [];
  
  form = {};

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.api.getJobs().subscribe(data => {
      this.jobs = data;
      this.api.getUnits().subscribe((data:any) => {
        this.unids = data;
        this.loading = false;
      });
    });
  }

  addProfession() {
    this.edit = false;
    this.addProfessionModal = true;
  }
  addUnidad() {
    this.edit = false;
    this.addEnterpriseModal = true;
  }
  
  editProfession(id: string){
    this.loading = true;
    this.api.getJob(id).subscribe(data => {
      this.edit = true;
      this.selJob = data;
      this.addProfessionModal = true;
      this.loading = false;
    })
  }

  deleteProfession( id: string ) {
    this.actionProfessionModal = true;
    this.action = 'eliminar';
    this.selId = id;
  }

  editUnit(id: string){
    this.loading = true;
    this.api.getJob(id).subscribe(data => {
      this.edit = true;
      this.selJob = data;
      this.addProfessionModal = true;
      this.loading = false;
    })
  }

  deleteUnit( id: string ) {
    this.actionProfessionModal = true;
    this.action = 'eliminar';
    this.selId = id;
  }
  
  pausarProfesion(  ){
    this.actionProfessionModal = true;
    this.action = 'pausar';
    
    //TODO: pausar profesiones
  }

  getProfessions($event: any){
    this.addProfessionModal = $event;
    this.api.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }
  
  onDismissActionModal(){
    this.actionProfessionModal = false;
    this.loading = true;
    this.api.getJobs().subscribe(data => {
      this.jobs = data;
      this.loading = false;
    });
  }
}
