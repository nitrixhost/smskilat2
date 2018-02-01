import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  error: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.auth.login(this.user)
    .then((user) => {
      localStorage.setItem('kk',user.json().access_token);
      this.router.navigateByUrl('/home');
    })
    .catch((err) => {
      this.error = err.statusText;
    });
  }

}
