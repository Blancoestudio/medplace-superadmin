import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-health-provider',
  templateUrl: './health-provider.component.html',
  styleUrls: ['./health-provider.component.scss']
})
export class HealthProviderComponent implements OnInit {

  modalAction: boolean = false;
  actionProvider: string = '';


  confirmDelete: boolean = false;
  confirmPause: boolean = false;

  modalProvider: boolean = false;
  providerAdded: boolean = false;
  editProvider: boolean = false;

  dataTable: any[] = [
    {
      name: 'Jorge Perez',
      accesscode: '1234',
      rut: '11.111.111-1',
      mail: 'jorge@gmail.com',
      provider: 'Cliníca Davíla',
      register: true,
      admin: ['', ''],
      _id: '',
    }
  ];
  
  selCustomer: any = {
    id: '',
    name: '',
    rut: '',
    review: '',
    address: '',
    email: '',
    website: ''
  };
  
  selCustomers: string[] = [];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getCustomers().subscribe(data => {
      this.dataTable = data;
    });
  }

  toggleModalProvider(action: string, id?: string) {
    switch (action) {
      case 'add':
        this.modalProvider = true;
        this.editProvider = false;
        this.selCustomer = {};
        break;
      case 'edit':
        this.modalProvider = true;
        this.editProvider = true;
        this.selCustomer = this.dataTable.find(item => item._id === id);
        break;
      case 'close':
        this.modalProvider = false;
        this.editProvider = false;
        break;

      default:
        this.modalProvider = false;
        this.editProvider = false;
        break;
    }
  }

  confirmToggle(action: string){
    this.confirmDelete = true;
  }

  addProvider(){
    this.api.getCustomers().subscribe(data => {
      this.dataTable = data;
    });
  }

  confirmResponse(resp: boolean) {
    console.log(resp);
  }

  dismissAction() {
    // this.confirmDelete = false
    // this.confirmPause = false
    this.modalAction = false;
    this.api.getCustomers().subscribe(data => {
      this.dataTable = data;
    });
  }

  triggerAction(action: string) {
    this.actionProvider = action;
    // console.log(this.actionProvider);
    this.modalAction = true;
  }

  toggleListItem(event: Event, id: string){
    if(event){
      this.selCustomers.push(id);
    }
    else{
      const index = this.selCustomers.findIndex(item => item === id)
      const [item] = this.selCustomers.splice(index, 1);
    }
  }
}
