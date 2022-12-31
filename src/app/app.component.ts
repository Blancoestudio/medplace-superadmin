import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medplace-super-admin';

  constructor(public location: Location, public api: ApiService) {
    if (window.location.href.indexOf('test') > -1 && environment.url == 'https://api.medplace.cl') {
      window.location.href = 'https://superadmin.medplace.cl';
    }
  }
}
