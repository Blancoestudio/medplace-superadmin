import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-superintendencia',
  templateUrl: './superintendencia.component.html',
  styleUrls: ['./superintendencia.component.scss']
})
export class SuperintendenciaComponent implements OnInit {
  
  loading: boolean = true;
  peoples: any = [];
  jobs: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.api.getJobs().subscribe((data:any) => {
      this.jobs = data;
      this.api.getUsers({isValidAppUser:true}).subscribe(data => {
        this.peoples = data;
        this.loading = false;
      });
    });
  }

  getPro(id:string) {
    if (id) {
      try {
        return this.jobs.filter((x:any) => { return x._id == id; })[0].name;
      } catch (err) {
        console.error(err);
        return '';
      }
    } else { 
      return ''; 
    }
  }

  changeActivation(i:number) {
    this.api.setActivation(this.peoples[i]._id, this.peoples[i].registroValidado).subscribe((data:any) => {

    });
  }
  
}
