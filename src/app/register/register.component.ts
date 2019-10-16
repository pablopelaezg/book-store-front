import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private name: string;
  private user: string;
  private password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.name, this.user, this.password)
      .subscribe(response => this.router.navigate(['/']));
  }

}
