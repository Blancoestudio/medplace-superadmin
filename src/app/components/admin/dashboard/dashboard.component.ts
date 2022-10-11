import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customers: any = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getCustomers().subscribe((data:any) => {
      this.customers = data;
    });
  }

}
