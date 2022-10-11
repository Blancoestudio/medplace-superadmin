import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  hide: boolean = true;
  public userData: any = {
    email: '',
    password: '',
    platform: 'web'
  };

  constructor( private router: Router, public api: ApiService ) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    // this.alertMessage = '';
    // this.alertShow = false;
    this.api.login(this.userData).subscribe((data:any) => {
      console.log(data);
      // this.alertShow = true;
      // this.alertResult = 'alert-success';
      // this.alertMessage = 'Acceso correcto, espere por favor';
      setTimeout(() => {
        this.api.setProfile(data);
        this.api.setToken(data.token);
        this.router.navigateByUrl('/admin/dashboard');
        this.loading = false;
      },1000);
    }, (err:any) => {
      //this.api.toastError(err.error.error)
      // this.alertResult = 'alert-danger';
      // this.alertShow = true;
      // this.alertMessage = err.error.error ?? 'Error de conexión';
      this.loading = false;
      })
  }

}
