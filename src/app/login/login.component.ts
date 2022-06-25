import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [
      '',
      Validators.required
    ],
    password: [
      '',
      Validators.required
    ]
  })

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      const {
        username,
        password
      } = this.loginForm.value
      this.http.post('http://localhost:8080/login', {
        username,
        password
      }).subscribe(() =>
      {
        this.router.navigate(['/idea-list'])
      })
    }
  }

}
