import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {
  private jwtToken: string = null;
  public infos;
  public username: string;
  public roles: Array<string>;
  r: any = null;
  private host = 'http://localhost:8080';
  constructor(private http: HttpClient) {

  }

  login(user) {
    return  this.http.post(this.host + '/login', user, {observe: 'response'});
  }

  isAdmin() {

    for (this.r of this.infos.roles) {

     if (this.r.authority === 'ADMIN') {
       return 1;
     }
    }

    return 0;
  }
  isGesclient() {
    return this.roles.indexOf('GES_CLIENT') >= 0;
  }
  isGescom() {
    return this.roles.indexOf('GES_COM') >= 0;
  }
  isGescompteur() {
    return this.roles.indexOf('GES_COMPTEUR') >= 0;
  }

  logout() {}

  saveTask(task) {
    return  this.http.post(this.host + '/add', task);
  }
  loadRole() {
    return this.http.get(this.host + '/lrole');
  }

  register(user) {
    return this.http.post(this.host + '/register', user);
  }

  update(data) {
    return this.http.post(this.host + '/update', data);
  }

}
