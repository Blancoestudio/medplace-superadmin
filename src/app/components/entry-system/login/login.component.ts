import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/admin/dashboard'])
    }, 2000);
  }

}
