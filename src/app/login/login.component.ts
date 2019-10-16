import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.loginUser(this.username, this.password).subscribe();
  }

}
