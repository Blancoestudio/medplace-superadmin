import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-provider',
  templateUrl: './health-provider.component.html',
  styleUrls: ['./health-provider.component.scss']
})
export class HealthProviderComponent implements OnInit {

  confirmDelete: boolean = false;
  confirmPause: boolean = false;

  modalProvider: boolean = false;
  providerAdded: boolean = false;
  editProvider: boolean = false;

  dataTable = [
    {
      name: 'Jorge Perez',
      cod: '1234',
      rut: '11.111.111-1',
      mail: 'jorge@gmail.com',
      provider: 'Cliníca Davíla',
      register: true,
      admin: ['', '']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleModalProvider(action: string) {
    switch (action) {
      case 'add':
        this.modalProvider = true;
        this.editProvider = false;
        break;
      case 'edit':
        this.modalProvider = true;
        this.editProvider = true;
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

  addProvider(){}

  confirmResponse(resp: boolean) {
    console.log(resp);
  }


}
