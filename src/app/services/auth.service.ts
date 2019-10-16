import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Item} from "../model/item.model";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoginResponse} from "../model/loginresponse.model";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";

const jwtHelper = new JwtHelperService();

@Injectable()
export class AuthService {

  private loginHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'});

  private registerHeaders = new HttpHeaders({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(username: string, password: string) {

    let body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', environment.authConfig.grantType)
      .set('client_id', environment.authConfig.clientId)
      .set('client_secret', environment.authConfig.clientSecret);

    return this.http.post<LoginResponse>(
      environment.baseAuthUrl + environment.authUris.login, body.toString(), {headers: this.loginHeaders})
      .pipe(
        map(response => this.saveToken(response.access_token)
      ));
  }

  registerUser(name: string, username: string, password: string) {

    let body = {
      name: name,
      user: username,
      password: password
    };

    return this.http.post<LoginResponse>(
      environment.baseAuthUrl + environment.authUris.user, body, {headers: this.registerHeaders});
  }

  saveToken(token){
    localStorage.setItem('token', token);
    this.router.navigate(['/']);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if(!token) {
      return false;
    }
    return true;
  }

}
