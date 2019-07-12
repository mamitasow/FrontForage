import { Component, OnInit } from '@angular/core';

import {Route, Router} from '@angular/router';
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode = 0;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(dataForm) {
    this.service.login(dataForm).subscribe(resp => {
      this.router.navigate(['home']);
    }, error => {
      this.mode = 1;
    } );
  }


  onRegister() {

  }

}
